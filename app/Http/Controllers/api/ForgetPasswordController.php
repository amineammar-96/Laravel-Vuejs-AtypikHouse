<?php

namespace App\Http\Controllers\api;

use App\Models\forgetPassword;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;




class ForgetPasswordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {


        $validator = Validator::make($request->all(), [
            'email' => "email|required",
        ]);
        $token ='';

        if ($validator->fails()) {
            return response()->json([
                'message' => "invalid",
                'error' => $validator->errors()
            ]);
        } else {
            $token = Str::random(64);
            $account = User::where('email' , $request->email)->get();

            if (count($account)>0){


                DB::table('forget_passwords')->insert([
                    'email' => $request->email,
                    'token' => $token,
                    'created_at' => Carbon::now()
                  ]);



                $details = [
                    'link' => 'http://atypik-house.test:8000/#/resetPasswordForm/?email='.$request->email.'&token='.$token ,
                ];

                Mail::to($request->email)->send(new \App\Mail\ResetPasswordSendMail($details));



                return response()->json([
                    'message' => "founded",
                    'account' => $account,
                    'details'=>$details,

                ]);

            }else {
                return response()->json([
                    'message' => "not founded",
                    'text' => 'Impossible de trouvez votre compte AtypikHouse',

                ]);
            }



        }
    }


    public function verifyResetToken(Request $request){

        $resetToken =forgetPassword::select('*')->where('token' , $request->token)->where('email' , $request->email)->get();
        if(count($resetToken)>0){
            return response()->json([
                'status' => 'found',
                'tokenStatus' => $resetToken,
            ]);
        }else{
           return response()->json([
               'status' => 'not found',
           ]);
        }

    }



    public function update(Request $request)
    {


        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => "confirmed|required|min:8",
        ]);


        if ($validator->fails()) {
            return response()->json([
                'message' => "invalid",
                'error' => $validator->errors()
            ]);
        } else {
            $user = User::where('email', $request->email)->update([
                'password' => bcrypt($request->password),
            ]);

            $reset = forgetPassword::where('email' , $request->email)->delete();

            return response()->json([
                'status' => 'updated',
            ]);

        }
    }
}
