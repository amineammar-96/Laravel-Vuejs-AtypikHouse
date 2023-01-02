<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Notification;
use App\Models\userAvatar;
use Carbon\Carbon;

class NotificationController extends Controller
{

    public function deleteNotification(Request $request)
    {

        $notification = Notification::find($request->id);
        //  dd($user);
         $notification->delete();

        return response()->json([
            "status" => "deleted",
        ], 200);

    }


    public function changeNotificationReadAt(Request $request)
    {



        $notifications = Notification::where('user_id' , $request->id)->update([
            'read_at' => Carbon::now(),
        ]);


        return response()->json([
            'notifications' => $notifications,
            'status' => 'changeNotificationReadAtChanged'
        ]);


    }


    public function getUserNotifications(Request $request){
            $avatars=[];
            $from_users=[];

        $notifications=Notification::where('user_id' , $request->id)->orderBy('id' , 'desc')->with('user')->get();

        for ($i=0; $i < count($notifications) ; $i++) {
            if(count(User::where('id' , $notifications[$i]->from_id )->get()) > 0){
                array_push( $from_users , User::where('id' , $notifications[$i]->from_id )->get());

            }
        }

        foreach ($notifications as $notification => $element) {
            if(count(userAvatar::where('user_id' , $element->from_id )->get())>0)
            array_push( $avatars , (userAvatar::where('user_id' , $element->from_id)->get())[0]);
        }


        // $notifications['from_users'] = $from_users;


        foreach ($from_users as $key => $user) {
            $notifications[$key]->from_user = $user[0];
        }


        return response()->json([
            'avatars' => ($avatars),
            'notifications' => $notifications,
            'from_users' => $from_users,
            'status' => 'true',
        ]);


    }


    public function sendNotification(Request $request){

        $notification = Notification::create([
            'content' => $request->content,
            'from_id' => $request->from_id,
            'user_id' => $request->user_id,
            'link' => $request->link,

            'type' => $request->type,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        return response()->json([
            'notification' => $notification,
            'status' => 'sent',
        ]);


    }




}

