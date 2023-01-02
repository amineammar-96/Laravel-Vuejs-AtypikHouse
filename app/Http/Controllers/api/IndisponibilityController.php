<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Like;
use App\Models\Indisponibility;
use Carbon\Carbon;

class IndisponibilityController extends Controller
{




    public function getIndisponibilitiesForAnnonce(Request $request){

        $indisponibilities = Indisponibility::where('annonce_id' , $request->annonce_id)->get();


        return response()->json([
            'status'  => 'indisponibilities found' ,
            'indisponibilities'  => $indisponibilities ,

        ]);

    }


    public function deleteIndispo($id)
    {
         Indisponibility::where('id' , $id)->delete();
        return response()->json([
            'status' => 'deleted'
        ]);
    }


    public function addIndisponibility(Request $request){
        $indisponibility = Indisponibility::create([
            'owner_id' => $request->owner_id,
            'annonce_id' => $request->annonce_id,
            'dateFrom' => $request->dateFrom,
            'dateTo' => $request->dateTo,
            'motif' => $request->motif,

            'created_at'=> Carbon::now(),
            'updated_at'=> Carbon::now(),

        ]);


        return response()->json([
            'status'  => 'indisponibilityCreated' ,
            'indisponibility'  => $indisponibility ,

        ]);

    }







}

