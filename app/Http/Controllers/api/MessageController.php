<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Message;
use Carbon\Carbon;

use App\Models\Conversation;
use App\Models\userAvatar;

class MessageController extends Controller
{


    public function changeMessageReadingState(Request $request)
    {

        $messages=Message::where("conversation_id" , $request->conversation_id)->where("receiver_user_id" , $request->userId  )->update([
            'readingState' => 1,
            'updated_at' => Carbon::now(),
        ]);

        return response()->json([
            'messages' => Message::where("conversation_id" , $request->conversation_id)->where("receiver_user_id" , $request->userId)->get(),
            'status' => 'changeddMessageReadingState'
        ]);


    }


    public function getUserMessages(Request $request){

        $conversations = Conversation::where('user_id', $request->id)->orWhere('receiver_id', $request->id)->orderBy('updated_at' ,'desc')->with('messages')->get();

        $avatars = [];



        foreach ($conversations as $key => $conv) {



                $userOne = $conv["messages"][0]->sender_user_id;
                $userTwo = $conv["messages"][0]->receiver_user_id;



            if($userOne != $request->id){
                $avatar=userAvatar::where('user_id' , $userOne)->get();
                $userAccount=User::where('id' , $userOne)->get();
            }

            if($userTwo != $request->id){
                $userAccount=User::where('id' , $userTwo)->get();

                $avatar=userAvatar::where('user_id' , $userTwo)->get();
            }
            $conv["avatar"]=$avatar[0];
            $conv["userAccount"]=$userAccount[0];
            foreach ($conv["messages"] as $key => $msg) {
                $msg['userAccount']=$userAccount[0];
            }

        }










        return response()->json([
            'conversations' => $conversations,

            'status' => 'true',
        ]);


    }


    public function getConversationById(Request $request){

        $conversations = Conversation::where('id', $request->id)->get();

        $avatars = [];



        foreach ($conversations as $key => $conv) {



                $userOne = $conv["messages"][0]->sender_user_id;
                $userTwo = $conv["messages"][0]->receiver_user_id;



            if($userOne != $request->id){
                $avatar=userAvatar::where('user_id' , $userOne)->get();
                $userAccount=User::where('id' , $userOne)->get();
            }

            if($userTwo != $request->id){
                $userAccount=User::where('id' , $userTwo)->get();

                $avatar=userAvatar::where('user_id' , $userTwo)->get();
            }

            $conv["avatar"]=$avatar[0];
            $conv["userAccount"]=$userAccount[0];
            foreach ($conv["messages"] as $key => $msg) {
                $msg['userAccount']=$userAccount[0];

            }




        }



        return response()->json([
            'conversations' => $conversations,

            'status' => 'true',
        ]);

    }


    public function sendMessage(Request $request){


        $conversations = Conversation::where('user_id', $request->sender_user_id)->where('receiver_id' , $request->receiver_user_id)
									->orWhere('user_id',  $request-> receiver_user_id)->where('receiver_id', $request->sender_user_id)
									->get();




        if(count($conversations)>0){
            $message = Message::create([
                'content' => $request->content,
                'sender_user_id' => $request->sender_user_id,
                'receiver_user_id' => $request->receiver_user_id,
                'to_name' => $request->to_name,
                'conversation_id' => $conversations[0]->id,
                'from_name' => $request->from_name,
                'readingState' => false,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),

            ]);

            $conversation = Conversation::where('user_id', $request->sender_user_id)->where('receiver_id' , $request->receiver_user_id)
            ->orWhere('user_id',  $request-> receiver_user_id)->where('receiver_id', $request->sender_user_id)
            ->update([
                'updated_at' => Carbon::now()
            ]);

            return response()->json([
                'message' => $message,
                'status' => 'sent',
            ]);

        }else {

            $conversation = Conversation::create([
                'content' => $request->content,
                'user_id' => $request->sender_user_id,
                'receiver_id' => $request->receiver_user_id,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);

            $message = Message::create([
                'content' => $request->content,
                'sender_user_id' => $request->sender_user_id,
                'receiver_user_id' => $request->receiver_user_id,
                'to_name' => $request->to_name,
                'conversation_id' => $conversation->id,
                'from_name' => $request->from_name,
                'readingState' => false,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);


            return response()->json([
                'message' => $message,
                'conversation' => $conversation
            ]);

        }









    }

    public function sendMessageMobile(Request $request){


        $conversation = Conversation::where('id', $request->conversation_id)->get();
        
        $sender_user_id=$request->connected_user;
        
        $receiver_user_id = $request->connected_user==$conversation[0]->receiver_id ? $conversation[0]->user_id : $conversation[0]->receiver_id;



        $receiver_user = User::where('id',$receiver_user_id)->get();
        $sender_user = User::where('id',$sender_user_id)->get();




            $message = Message::create([
                'content' => $request->content,
                'sender_user_id' => $sender_user_id,
                'receiver_user_id' => $receiver_user_id,
                'to_name' => $receiver_user[0]->lastname.' '.$receiver_user[0]->firstname,
                'conversation_id' => $request->conversation_id,
                'from_name' => $sender_user[0]->lastname.' '.$sender_user[0]->firstname,
                'readingState' => false,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),

            ]);

            $conversation = Conversation::where('user_id', $sender_user_id)->where('receiver_id' , $receiver_user_id)
            ->orWhere('user_id',  $request-> receiver_user_id)->where('receiver_id', $request->sender_user_id)
            ->update([
                'updated_at' => Carbon::now()
            ]);

            return response()->json([
                'message' => $message,
                'status' => 'sent',
            ]);

       









    }




}

