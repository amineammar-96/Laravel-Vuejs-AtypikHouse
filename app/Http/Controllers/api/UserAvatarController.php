<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\userAvatar;
use Illuminate\Support\Facades\File;

use Illuminate\Support\Facades\Response;

class UserAvatarController extends Controller
{

    public function getAvatarByUserId(Request $request){
    $userAvatar=userAvatar::where('user_id' , $request->id)->get();

    return response()->json([
        'userAvatar' => $userAvatar,
    ]);
    }


    public function sendUserAvatarImage($id)
    {

        $avatar= userAvatar::where('user_id' , $id)->get();
        // dd(count($avatar));
        if(count($avatar)>0){


        // return response()->json([
        //     'file' =>mb_convert_encoding(file(public_path("/storage/".$avatar[0]->path."/".$avatar[0]->name)), 'UTF-8', 'UTF-8'),

        // ]);

        $path = public_path("/storage/".$avatar[0]->path."/".$avatar[0]->name);

        $file = File::get($path);
        $type = File::mimeType($path);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);

        return $response;

        }else{
            return response()->json([
                'status' => 'failed',
            ],404);
        }
    }


    public function uploadAvatar(Request $request){
        $user=User::where('id' , $request->user_id)->get();

        // $request->validate([
        //    'avatar' => 'max:2048'
        // ]);

        $avatarImage = userAvatar::where('user_id',$request->user_id)->get();


if(count($avatarImage)>0){
    // File::delete('/uploads/'."avatars/" .$user[0]->lastname."/", $user[0]->firstname. "-" .$user[0]->lastname. "-" .$user[0]->id.".". $request->avatar->extension(), 'uploads');
    File::deleteDirectory(public_path("/storage/"."avatars/" .$user[0]->lastname.'-'.$user[0]->id."/"));

    $request->avatar->storeAs("/avatars/".$user[0]->lastname.'-'.$user[0]->id."/", $user[0]->firstname. "-" .$user[0]->lastname. "-" .$user[0]->id.".". $request->avatar->extension(), 'public');

    $img =userAvatar::where('user_id' , $request->user_id)->update([
        'path' => 'avatars/'.$user[0]->lastname.'-'.$user[0]->id."/",
        'name' => $user[0]->firstname. "-" .$user[0]->lastname. "-" .$user[0]->id.".". $request->avatar->extension() ,
        'updated_at' => now(),
    ]);
    return response()->json([
        'status'=>"updated",
        'image' => userAvatar::where("user_id" , $request->user_id)->get(),
    ]);
}else{
     File::delete('/storage/'."avatars/".$user[0]->lastname.'-'.$user[0]->id."/" , $user[0]->firstname. "-" .$user[0]->lastname. "-" .$user[0]->id.".". $request->avatar->extension(), 'public');

            $request->avatar->storeAs("/avatars/".$user[0]->lastname.'-'.$user[0]->id."/" , $user[0]->firstname. "-" .$user[0]->lastname. "-" .$user[0]->id.".". $request->avatar->extension(), 'public');

                $img =userAvatar::create([
                    'user_id' => $request->user_id ,
                    'path' => 'avatars/'.$user[0]->lastname.'-'.$user[0]->id."/",
                    'name' => $user[0]->firstname. "-" .$user[0]->lastname. "-" .$user[0]->id.".". $request->avatar->extension() ,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

            return response()->json([
                'status'=>"created",
                'image' => userAvatar::where("user_id" , $request->user_id)->get(),
            ]);

        }
            // return response()->json([
            //     'status'=>"error",
            // ]);

   }

    public function upDateAvatar()
    {



    }
}
