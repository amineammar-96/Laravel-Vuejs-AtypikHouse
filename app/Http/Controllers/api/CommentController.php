<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Annonce;
use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Notification;
use Carbon\Carbon;

use App\Models\User;
use App\Models\userAvatar;

class CommentController extends Controller
{



    public function addComment(Request $request)
    {
        $comment = Comment::create([
            'content' => $request->content,
            'user_id' => $request->user_id,
            'annonce_id' => $request->annonce_id,
            'rating' => $request->rating,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        for ($i=0; $i <30 ; $i++) {
            $comment = Comment::create([
                'content' => $request->content,
                'user_id' => $request->user_id,
                'annonce_id' => $request->annonce_id,
                'rating' => $request->rating,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }

        $annonce=Annonce::where('id' , $request->annonce_id)->get();


        $adminArray =User::where('role' , 'admin')->orWhere('role' , 'moderateur')->get();

        foreach ($adminArray as $key => $admin) {
            $notification = Notification::create([
                'content' => "A ajouté un commentaire pour l'annonce (".$annonce[0]->title.")",
                'from_id' => $request->user_id,
                'user_id' => $admin->id,
                'link' => "/annonce/?id=".$request->annonce_id,

                'type' => "comment",
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }




        $notification = Notification::create([
            'content' => "A ajouté un commentaire pour votre annonce (".$annonce[0]->title.")",
            'from_id' => $request->user_id,
            'user_id' => $annonce[0]->user_id,
            'link' => "/annonce/?id=".$request->annonce_id,
            'type' => "comment",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        return response()->json([
            'status' => 'commentAdded',
            'comment' => $comment,
        ]);
    }

    public function getAnnonceComments(Request $request)
    {
        $comments = Comment::where('annonce_id' , $request->id)->orderBy('id' , 'desc')->get();


        foreach ($comments as $key => $comment) {
           $userAux = User::where('id' , $comment->user_id)->get();
           $comment->userAccount= $userAux[0];

           $avatar = userAvatar::where('user_id' , $comment->user_id)->get();
           $comment->avatar= $avatar;

        }
        return response()->json([
            'status' => 'success',
            'comments' => $comments,
        ]);
    }


    public function getAverageRatingForCommentsByAnnonce(Request $request)
    {
        $comments = Comment::where('annonce_id' , $request->id)->get();

        $average=0;

        foreach ($comments as $key => $comment) {
           $average+=$comment->rating;
        }

        if(count($comments)>0)
        $average = $average / count($comments);
        return response()->json([
            'status' => 'success',
            'average' => $average,
        ]);
    }



}
