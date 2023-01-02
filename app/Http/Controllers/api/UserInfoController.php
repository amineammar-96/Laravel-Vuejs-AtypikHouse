<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;


use Illuminate\Http\Request;
use App\Models\userInfo;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use App\Models\user;



class UserInfoController extends Controller
{
    public function getUserInfo(Request $request)
    {
        $userInfo = userInfo::where('user_id', $request->id)->get();
        $user = user::where('id', $request->id)->get();
        return response()->json([
            'status' => 'true',
            'userInfo' => $userInfo,
            'user' => $user,

        ]);
    }

    public function saveUserInfo(Request $request)
    {
        $userInfo = userInfo::where('user_id', $request->id)->get();

        // dd(count($userInfo));
        if (count($userInfo) == 0) {
            $validator = Validator::make($request->all(), [
                'phoneNumber' => "required|regex:/^([0-9\s\-\+\(\)]*)$/|min:8",
                "firstname" => "required|min:2",
                "lastname" => "required|min:2",

                "address" => "required|min:5",
                'postalCode' => "required|min:4",
                "city" => "required|min:3",
                "country" => "required|min:3",
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'status' => "invalid",
                    'errors' => $validator->errors()
                ], 422);
            } else {


                $userInfo = userInfo::create([
                    "country" => $request->country,
                    "phone" => $request->phoneNumber,
                    "address" => $request->address,
                    "addressComp" => $request->compAddress,
                    "city" => $request->city,
                    "postalCode" => $request->postalCode,
                    "user_id" => $request->id,
                    "created_at" => Carbon::now(),
                    "updated_at" => Carbon::now(),
                ]);

                $userUpdateName = User::where('id' , $request->id)->update([
                    'firstname' => $request->firstname,
                    'lastname' => $request->lastname,

                ]);

                return response()->json([
                    'status' => "updatedSucc",
                    'userInfo' => $userInfo ,
                    "userUpdateName" =>  User::where('id' , $request->id)->get(),
                ]);
            }
        } else {

            $validator = Validator::make($request->all(), [
                "firstname" => "required|min:2",
                "lastname" => "required|min:2",
                'phoneNumber' => "required|regex:/^([0-9\s\-\+\(\)]*)$/|min:8",
                "address" => "required|min:5",
                'postalCode' => "required|min:4",
                "city" => "required|min:3",
                "country" => "required|min:3",
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'status' => "data errors",
                    'errors' => $validator->errors()
                ], 422);
            } else {

                $userInfo = userInfo::where('user_id', $request->id)->update([
                    "phone" => $request->phoneNumber,
                    "address" => $request->address,
                    "addressComp" => $request->compAddress,
                    "city" => $request->city,
                    "country" => $request->country,
                    "postalCode" => $request->postalCode,
                    "user_id" => $request->id,
                    "created_at" => Carbon::now(),
                    "updated_at" => Carbon::now(),
                ]);

                $userUpdateName = User::where('id' , $request->id)->update([
                    'firstname' => $request->firstname,
                    'lastname' => $request->lastname,

                ]);

                return response()->json([
                    'status' => "updated",
                    'userInfo' => $userInfo,
                ]);
            }
        }
    }
}
