<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Annonce;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ServiceAnnonce;
use App\Models\TypeLogement;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;


class ServiceAnnonceController extends Controller
{



    public function getServices()
    {
        $services=ServiceAnnonce::all();
        return response()->json([
            'services' => $services
        ]);
    }

    public function updateServiceTypeLogementState(Request $request){

        $propretie = ServiceAnnonce::where('id' , $request->id)->get();

        $propretie[0]->typesLogementIds =json_decode($propretie[0]->typesLogementIds);

        $tableAux=array();

        $tableAux=$propretie[0]->typesLogementIds;


        foreach ( $propretie[0]->typesLogementIds  as $key => $value) {
            if($value==$request->type_logement_id){

                array_splice($tableAux, $key, 1);

                $propretie[0]->typesLogementIds =  $tableAux;


                ServiceAnnonce::where('id' , $request->id)->update([
                    'updated_at' => Carbon::now(),
                    'typesLogementIds' => $propretie[0]->typesLogementIds  ,
                ]);
            }

            if ($value!=$request->type_logement_id && $key+1==count($tableAux)) {


                array_push($tableAux, $request->type_logement_id );
                $propretie[0]->typesLogementIds =  $tableAux;

                ServiceAnnonce::where('id' , $request->id)->update([
                    'updated_at' => Carbon::now(),
                    'typesLogementIds' => $propretie[0]->typesLogementIds
                ]);
            }
        }

    }



    public function addService(Request $request){
        $validator = Validator::make($request->all(), [
            "name" => "required",
            "typesLogementIds" => "required",
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => "invalid",
                'errors' => $validator->errors()
            ], 422);
        } else {
        $service = ServiceAnnonce::create([
            "name" => $request->name,
            "typesLogementIds" => json_encode($request->typesLogementIds),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        foreach ($request->typesLogementIds as $key => $typesLogementId) {
            $annonces = Annonce::where('type_logement_id', $typesLogementId)->get();
            $typeLogement = TypeLogement::where('id', $typesLogementId)->get();

            foreach ($annonces as $key => $annonce) {
                $notificationDeleteProprety = Notification::create([
                    'content' => " l'administration à ajouté un nouveau service dynamique (".$service->name.") pour le type ".$typeLogement[0]."qui correspond a votre annonce (Ref: #ATKHEB0000".$annonce->id.")",
                    'from_id' => $request->user_id,
                    'user_id' => $annonce->user_id,
                    'type' => "update",
                    'link' => "/updateAnnonce/?annonce_id=".strval($annonce->id),
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }

        }

        return response()->json([
            'created' => 'created',
            'service' => $service
        ]);
    }

    }



    public function getServicesByTypeLogement(Request $request){
        $services = ServiceAnnonce::all();
        $servicesElements=[];

        for ($i=0; $i <count($services) ; $i++) {
            for ($j=0; $j < count(json_decode($services[$i]->typesLogementIds)); $j++) {
                if((json_decode($services[$i]->typesLogementIds))[$j]==$request->type_logement_id){


                    array_push($servicesElements,$services[$i]);
                }
            }


        }

        return response()->json([
            'servicesElements' => $servicesElements
        ]);
    }





    public function getTypesOfLogementByService(Request $request)
    {
        $typesLogementByService=ServiceAnnonce::where('id' , $request->id)->get();

        return response()->json([
            'typesLogementByService' => $typesLogementByService
        ]);
    }






}

