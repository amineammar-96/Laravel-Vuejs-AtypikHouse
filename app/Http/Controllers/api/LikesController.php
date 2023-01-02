<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Like;
use App\Models\Annonce;
use App\Models\Comment;
use App\Models\Images;
use Carbon\Carbon;

class LikesController extends Controller
{




    public function getLikesForAnnonce(Request $request){

        $likes = Like::where('annonce_id' , $request->annonce_id)->with('annonce')->with('user')->get();


        return response()->json([
            'status'  => 'likes found' ,
            'likes'  => $likes ,

        ]);

    }

    public function getLikesForUsers(Request $request){

        $likes = Like::where('user_id' , $request->user_id)->with('annonce')->with('user')->get();


        foreach ($likes as $key => $like) {
            $annonceRatingStar=0;
            $comments = Comment::where('annonce_id' , $like->annonce_id)->get();
            foreach ($comments as $key => $comment) {
                $annonceRatingStar+=$comment->rating;
            }

            if(count($comments)>0) $annonceRatingStar=$annonceRatingStar/count($comments);
            $like->annonce->rating=$annonceRatingStar;
        }

        for ($i=0; $i < count($likes) ; $i++) {
            // dd($likes[$i]->annonce_id);
           $image = Images::where('annonce_id' , $likes[$i]->annonce_id)->get();

           $likes[$i]->annonce->images = $image;


        }

        return response()->json([
            'status'  => 'likes found' ,
            'likes'  => $likes ,

        ]);

    }



    public function addLike(Request $request){

        $likeAlreadyExist = Like::where('user_id' , $request->user_id )->where('annonce_id' , $request->annonce_id )->get();
        if(
            count($likeAlreadyExist) > 0
        ){
           $like = Like::where('user_id' , $request->user_id )->where('annonce_id' , $request->annonce_id )->delete();
            return response()->json([
                'status'  => 'deleted' ,
                'like'  => $like ,

            ]);
        }else {

        $like = Like::create([
            'user_id' => $request->user_id,
            'annonce_id' => $request->annonce_id,

            'created_at'=> Carbon::now(),
            'updated_at'=> Carbon::now(),

        ]);

        return response()->json([
            'status'  => 'likeAdded' ,
            'like'  => $like ,

        ]);
    }

    }







}

