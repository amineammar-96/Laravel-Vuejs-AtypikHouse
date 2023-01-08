<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Annonce;
use App\Models\AnnonceVisit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use App\Models\Images;
use App\Models\TypeLogement;


class AnnonceController extends Controller
{


    public function getAnnoncesByTypeLogementId($id)
    {
        $annonces = Annonce::where('type_logement_id' , $id)->get();

        return response()->json([
            'annonces' => $annonces,
        ]);
    }


















    
    public function deleteAnnonce($id){


        Annonce::where('id' , $id)->with('images')->with('Indisponibilities')->with('likes')->with('reservations')->delete();
        return response()->json(
            [
                'status' => 'deleted'
            ]
            );
    }

    public function getAnnonces(){
        $onlyThreeAnnonce = Annonce::inRandomOrder()->limit(3)->with("images")->with('comments')->get();
        $annonces = Annonce::inRandomOrder()->with("images")->with('user')->with('comments')->get();
        $annoncesOrdered = Annonce::orderBy('id' , 'desc')->with("images")->with('comments')->get();

        $annonceRatingStar=0;



        foreach ($annonces as $key => $annonce) {
            $typeLogement = TypeLogement::where('id' , $annonce->id)->get();
            $annonce->typeLogement = $typeLogement[0]->name;
            foreach ($annonce->comments as $keyAux => $comment) {
                $annonceRatingStar+=$comment->rating;
            }

            if(count($annonce->comments)>0)$annonceRatingStar=$annonceRatingStar/count($annonce->comments);
            $annonce->rating=$annonceRatingStar;
        }

        $annonceRatingStar=0;


        foreach ($onlyThreeAnnonce as $key => $annonce) {
            $typeLogement = TypeLogement::where('id' , $annonce->id)->get();
            $annonce->typeLogement = $typeLogement[0]->name;
            foreach ($annonce->comments as $keyAux => $comment) {
                $annonceRatingStar+=$comment->rating;
            }

            if(count($annonce->comments)>0)$annonceRatingStar=$annonceRatingStar/count($annonce->comments);
            $annonce->rating=$annonceRatingStar;
        }

        $annonceRatingStar=0;


        foreach ($annoncesOrdered as $key => $annonce) {
            $typeLogement = TypeLogement::where('id' , $annonce->id)->get();
            $annonce->typeLogement = $typeLogement[0]->name;
            foreach ($annonce->comments as $keyAux => $comment) {
                $annonceRatingStar+=$comment->rating;
            }

            if(count($annonce->comments)>0)$annonceRatingStar=$annonceRatingStar/count($annonce->comments);
            $annonce->rating=$annonceRatingStar;
        }




        return response()->json(
            [
                'annonces' => $annonces,
                'onlyThreeAnnonce' => $onlyThreeAnnonce,
                'annoncesOrdered' => $annoncesOrdered
            ]
            );
    }


    public function getAnnonceByUserId(Request $request)
    {
        $userAnnonces=Annonce::where('user_id' , $request->owner_id)->with("images")->get();

        return response()->json([
            "status"=>"found",
            "userAnnonces" => $userAnnonces,
        ]);
    }

    public function getAnnonceById(Request $request)
    {
        $userAnnonce=Annonce::where('id' , $request->id)->with("images")->get();

        $annonceVisitsCount=count(AnnonceVisit::where('annonce_id' , $request->id )->get());

        $userAnnonce[0]->annonceVisitsCount=$annonceVisitsCount;

        return response()->json([
            "status"=>"found",
            "userAnnonce" => $userAnnonce,
        ]);
    }



    public function addAnnonce(Request $request){
        $validator = Validator::make($request->all(), [
            "title" => "required",
            "address" => "required",
            "city" => "required",
            "postalCode" => "required",
            "country" => "required",
            "surface" => "required",
            "numberOfBeds" => "required",
            "capacity" => "required",
            "description" => "required",
            "animaux" => "required",
            "user_id" => "required",
            "price" => "required",
            "type_logement_id" => "required",



        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => "invalid",
                'errors' => $validator->errors()
            ], 422);
        } else {

            $annonce = Annonce::create([
            "title" => $request->title,
            "address" => $request->address,
            "compAddress" => $request->compAddress,
            "city" => $request->city,
            "postalCode" => $request->postalCode,
            "country" => $request->country,
            "surface" => $request->surface,
            "numberOfBeds" => $request->numberOfBeds,
            "capacity" => $request->capacity,
            "description" => $request->description,
            "optionsLogement" => json_encode($request->optionsLogement),
            "servicesLogement" => json_encode($request->servicesLogement),
            "suppPropretiesAnnonce" => $request->suppPropretiesAnnonce,
            "type_logement_id" => $request->type_logement_id,



            "animaux" => $request->animaux,
            "informationsSupp" => $request->informationsSupp,
            "user_id" => $request->user_id,
            "price" => $request->price,

            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now(),

            ]);

            return response()->json([
                'status' => "annonceAdded",
                'annonce'=> $annonce
            ]);

        }
    }


    public function updateAnnonce(Request $request){
        $validator = Validator::make($request->all(), [
            "title" => "required",
            "address" => "required",
            "city" => "required",
            "postalCode" => "required",
            "country" => "required",
            "surface" => "required",
            "numberOfBeds" => "required",
            "capacity" => "required",
            "description" => "required",
            "animaux" => "required",
            "user_id" => "required",
            "price" => "required",


        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => "invalid",
                'errors' => $validator->errors()
            ], 422);
        } else {

            $annonce = Annonce::where('id' , $request->id)->update([
            "title" => $request->title,
            "address" => $request->address,
            "compAddress" => $request->compAddress,
            "city" => $request->city,
            "postalCode" => $request->postalCode,
            "country" => $request->country,
            "surface" => $request->surface,
            "numberOfBeds" => $request->numberOfBeds,
            "capacity" => $request->capacity,
            "description" => $request->description,
            "optionsLogement" => json_encode($request->optionsLogement),
            "servicesLogement" => json_encode($request->servicesLogement),
            "animaux" => $request->animaux,
            "informationsSupp" => $request->informationsSupp,
            "user_id" => $request->user_id,
            "price" => $request->price,
            "updated_at" => Carbon::now(),
            "suppPropretiesAnnonce" => json_encode($request->suppPropretiesAnnonce),
            "type_logement_id" => $request->type_logement_id,

            ]);

            return response()->json([
                'status' => "annonceAdded",
                'annonce'=> $annonce
            ]);

        }
    }

}
