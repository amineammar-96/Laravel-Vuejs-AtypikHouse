<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Annonce;
use App\Models\AnnonceVisit;
use App\Models\Comment;
use App\Models\Images;
use App\Models\TypeLogement;
use Illuminate\Http\Request;
use Carbon\Carbon;

class AnnonceVisitController extends Controller
{



    public function addAnnonceVisit(Request $request)
    {
        $checkVisit = AnnonceVisit::where('user_id' , $request->user_id )->where('annonce_id' , $request->annonce_id )->get();
        if(count($checkVisit)>0){
            AnnonceVisit::where('user_id' , $request->user_id )->where('annonce_id' , $request->annonce_id )->update([
                'updated_at' => Carbon::now(),
            ]);

            return response()->json([
                'status' => 'Already visited',
            ]);
        }else{
        $visit = AnnonceVisit::create([
            'user_id' => $request->user_id,
            'annonce_id' => $request->annonce_id,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        return response()->json([
            'status' => 'commentAdded',
            'comment' => $visit,
        ]);
    }
    }

    public function getAnnonceThreeLastVisitForUser(Request $request)
    {
        $threeLastVisit=AnnonceVisit::where('user_id' , $request->user_id)->orderBy('updated_at' ,'desc')->limit(3)->get();

        $lastThreeAnnones=[];
        $ratingAverage=0;

        foreach ($threeLastVisit as $key => $visit) {
            $annonce=Annonce::where('id' , $visit->annonce_id)->with('comments')->get();
            $annonceImages=Images::where('annonce_id' , $visit->annonce_id)->get();
            $annonce[0]->images = $annonceImages;

            $typeLogement = TypeLogement::where('id' , $annonce[0]->id)->get();
            $annonce[0]->typeLogement = $typeLogement[0]->name;


            $comments =Comment::where('annonce_id' , $annonce[0]->id)->get();
            if(count($comments)>0){


            foreach ($annonce[0]->comments as $key => $el) {
                    $ratingAverage+=$el->rating;
            }


            if(count($comments)>0)$ratingAverage=$ratingAverage/count($comments);

            $annonce[0]->rating=$ratingAverage;
        }

            array_push($lastThreeAnnones , $annonce[0]);

        }



        return response()->json([
            'threeLastVisit' => $threeLastVisit,
            'lastThreeAnnones' => $lastThreeAnnones,
        ]);
    }

    public function getAnnonceVisit(Request $request)
    {

    }






}
