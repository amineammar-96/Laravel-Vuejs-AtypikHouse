<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\PasswordReset;
use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;



class UserController extends Controller
{

public function mailVertificationRequest(Request $request)
{
    # code...

    $user= User::where('id' , $request->id)->get();


            $details = [
                'mailVertificationRequest' => "true",
                'link' => 'http://atypik-house.test:8000/#/emailVerificationMessage/?email='.$user[0]['email'] ,
            ];

            $token = $user[0]->createToken('auth')->accessToken;

            Mail::to($user[0]['email'])->send(new \App\Mail\newAccountCreated($details));

            return response()->json([
                         "status" => 'true', 'token' => $token
                 ], 200);

    }


    public function updatePasswordUser(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "password" => "confirmed|required|min:8",
        ]);


        if ($validator->fails()) {
            return response()->json([
                'status' => "invalid",
                'errors' => $validator->errors()
            ], 422);
        } else {

        $user=User::where('id' , $request->id)->update([
            'password' => bcrypt($request->password),
            "updated_at"=>Carbon::now(),
        ]);

        $userEmail = User::select('email')->where('id' , $request->id)->get();
        dd($userEmail[0]);
        $reset = PasswordReset::where('email' , $userEmail[0])->delete();


        return response()->json([
            'status' => "updated" ,
            'users' => $user,
        ]);

        }
    }


    public function getUserByRole(Request $request){
        $user = User::where('role' , $request->role)->with('userInfo')->with('userAvatar')->get();

        return response()->json([
            'status' => "found" ,
            'users' => $user,
        ]);
    }





    public function index(Request $request){
        $user = User::where('id' , $request->id)->with('userInfo')->with('userAvatar')->get();
        return response()->json([
            'status' => "found" ,
            'users' => $user,
        ]);
    }






    public function adminUpdate(Request $request){
        $user = User::where('id' , $request->id)->update([
            "lastname" => $request->lastname,
            "firstname" => $request->firstname,
            "email" => $request->email,
            "updated_at"=>Carbon::now(),
        ]);


$user = User::where('id' , $request->id)->get();
        return response()->json([
            'status' => "updated" ,
            'user' => $user,
        ]);
    }




public function signupClient(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'firstname' => "required|min:3",
            'lastname' => "required|min:3",
            'email' => "email|required",
            "password" => "confirmed|required|min:8",


        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => "invalid",
                'errors' => $validator->errors()
            ], 422);
        } else {


            $user = User::create([
                'lastname' => $request->lastname,
                'firstname' => $request->firstname,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                "remember_token" => Str::random(10),
                "role" => $request->role,
                "created_at" => Carbon::now(),
            ]);


            $details = [
                'mailVertificationRequest' => "false",

                'link' => 'http://atypik-house.test:8000/#/emailVerificationMessage/?email='.$request->email ,
            ];

            $token = $user->createToken('auth')->accessToken;

            Mail::to('your_receiver_email@gmail.com')->send(new \App\Mail\newAccountCreated($details));

            return response()->json([
                         "status" => 'true', 'token' => $token
                 ], 200);






    }
    }


    public function login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => "required|email",
            "password" => "required|min:8",
        ]);

        $validatedData = request([
            "email",
            "password",
        ]);


        if ($validator->fails()) {
            return response()->json([
                'status' => "invalid",
                'errors' => $validator->errors()
            ], 422);
        } else {

            if (auth()->attempt($validatedData)) {



                $token = auth()->user()->createToken('auth:api')->accessToken;
                // dd($token->token);
                $user = User::where('email', $request->input('email'))->get();
                return response()->json([
                    "status" => "success",
                    "token" => $token->token,
                    "user" => $user,

                ]);

                // dd($user[0]->email);
                // if($user[0]->email==$request->email && $user[0]->password==$request->epasswordl){

                //     return response()->json([
                //         'status' =>"trouvé"
                //     ]);

            } else {
                $user = User::where('email', $request->input('email'))->get();
                return response()->json([
                    "status" => "Mot de passe ou adresse email ",
                    "validate" => $validatedData, "user" => $user,
                    "info" => Auth::attempt($validatedData),
                ]);
            }
        }
    }


    public function deleteUser(Request $request){
         $user = User::find($request->id);
        //  dd($user);
         $user->delete();

        return response()->json([
            "status" => "deleted",
        ], 200);
    }


    public function emailVerification(Request $request){

        $user = User::where('email' ,$request->email)->get();
        if($user[0]->email_verified_at == null) {
        User::where('email' , $request->email)->update([
            'email_verified_at' => Carbon::now(),
        ]);
        return response()->json([
            'status' => 'done'
        ]);
    }else {
        return response()->json([
            'status' => 'activited'
        ]);
    }


    }

    public function contactFormMailTo(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => "required|email",
            "nomComplet" => "required",
            "textMessage" => "required",

        ]);




        if ($validator->fails()) {
            return response()->json([
                'status' => "invalid",
                'errors' => $validator->errors()
            ], 422);
        } else {
            $details=[
                "mess" => $request->textMessage,
                "email" => $request->email,

            ];

            Mail::to('atypik-house@gmail.com')->send(new \App\Mail\contactFormMailAtypikHouse($details));
            Mail::to($request->email)->send(new \App\Mail\contactFormMail($details));



            return response()->json([
                'message' => "sended",
                'details'=>$details,

            ]);



        }
    }
}



