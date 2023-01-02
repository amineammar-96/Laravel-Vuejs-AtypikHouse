<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Annonce;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Proprety;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;

class PropretyController extends Controller
{


    public function getPropretyById($id){
        $proprety = Proprety::where('id' , $id)->get();

        return response()->json([
            'proprety' => $proprety,
        ]);
    }

    public function addProprety(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "required",
            "typesLogementIds" => "required",
            "required" => "required",

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => "invalid",
                'errors' => $validator->errors()
            ], 422);
        } else {
            $propretie = Proprety::create([
                "name" => $request->name,
                "typesLogementIds" => json_encode($request->typesLogementIds),
                "required" => $request->required,
                "unity" => $request->unity,

                'created_at' => now(),
                'updated_at' => now(),
            ]);

            foreach ($request->typesLogementIds as $key => $typesLogementId) {
                $annonces = Annonce::where('type_logement_id', $typesLogementId)->get();

                foreach ($annonces as $key => $annonce) {
                    $notificationDeleteProprety = Notification::create([
                        'content' => " l'administration à ajouté une propriété dynamique dans votre annonce  (".$propretie->name.")",
                        'from_id' => $request->user_id,
                        'user_id' => $annonce->user_id,
                        'type' => "update-modal",
                        'link' => "/updateAnnonce/?annonce_id=".strval($annonce->id),
                        'created_at' => Carbon::now(),
                        'updated_at' => Carbon::now(),
                    ]);
                }

            }



            return response()->json([
                'created' => 'created',
                'propretie' => $propretie
            ]);
        }
    }


    public function updateRequiredProprety(Request $request)
    {
        $propretie = Proprety::where('id', $request->id)->update([
            'required' => $request->content,
        ]);
    }

    public function deletePropretyById(Request $request)
    {
        $proprety = Proprety::where('id', $request->id)->get();
        $annoncesWithThisProprety = [];


        foreach (json_decode($proprety[0]->typesLogementIds) as $key => $typesLogementId) {
            $var = Annonce::where('type_logement_id', $typesLogementId)->get();
            foreach ($var as $key => $annonce) {
                array_push($annoncesWithThisProprety, $annonce);
            }
        }


        foreach ($annoncesWithThisProprety as $key => $annonce) {

            $annonceAux = Annonce::where('id', $annonce->id)->get();

            $propretiesAux = $annonceAux[0]->suppPropretiesAnnonce;
            // dd($propretiesAux);

            foreach ($propretiesAux as $keyAux => $propretyAux) {

                if (
                    $propretyAux["name"] == $proprety[0]->name
                ) {
                    array_splice($propretiesAux, $keyAux, 1);
                }
            }





            $notificationDeleteProprety = Notification::create([
                'content' => " L'administration à supprimé une propriété dynamique dans votre annonce  (".$proprety[0]->name.")",
                'from_id' => $request->user_id,
                'user_id' => $annonce->user_id,
                'type' => "Delete",
                'link' =>"/annonce/?id=".$annonce->id,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);





            Annonce::where('id', $annonce->id)->update([
                'suppPropretiesAnnonce' => $propretiesAux,
            ]);
        }

        $propretie = Proprety::where('id', $request->id)->delete();


        return response()->json([
            'statusDeleted' =>"deleted",

        ]);
    }


    public function getTypesOfLogementByProprety(Request $request)
    {
        $typesLogementByProprety = Proprety::where('id', $request->id)->get();

        return response()->json([
            'typesLogementByProprety' => $typesLogementByProprety
        ]);
    }


    public function updatePropretyTypeLogementState(Request $request)
    {

        $propretie = Proprety::where('id', $request->id)->get();

        $propretie[0]->typesLogementIds = json_decode($propretie[0]->typesLogementIds);

        $tableAux = array();

        $tableAux = $propretie[0]->typesLogementIds;


        foreach ($propretie[0]->typesLogementIds  as $key => $value) {
            if ($value == $request->type_logement_id) {

                array_splice($tableAux, $key, 1);

                $propretie[0]->typesLogementIds =  $tableAux;


                Proprety::where('id', $request->id)->update([
                    'updated_at' => Carbon::now(),
                    'typesLogementIds' => $propretie[0]->typesLogementIds,
                ]);



            }

            if ($value != $request->type_logement_id && $key + 1 == count($tableAux)) {


                array_push($tableAux, $request->type_logement_id);
                $propretie[0]->typesLogementIds =  $tableAux;

                Proprety::where('id', $request->id)->update([
                    'updated_at' => Carbon::now(),
                    'typesLogementIds' => $propretie[0]->typesLogementIds
                ]);
            }
        }
    }



    public function getPropretiesByTypeLogement(Request $request)
    {
        $propreties = Proprety::all();
        $propretiesElements = [];
        // dd();
        for ($i = 0; $i < count($propreties); $i++) {
            for ($j = 0; $j < count(json_decode($propreties[$i]->typesLogementIds)); $j++) {
                if ((json_decode($propreties[$i]->typesLogementIds))[$j] == $request->type_logement_id) {


                    array_push($propretiesElements, $propreties[$i]);
                }
            }
        }

        return response()->json([
            'propretiesElements' => $propretiesElements
        ]);
    }
    public function getPropreties()
    {
        $propreties = Proprety::all();

        return response()->json([
            'propreties' => $propreties
        ]);
    }
}
