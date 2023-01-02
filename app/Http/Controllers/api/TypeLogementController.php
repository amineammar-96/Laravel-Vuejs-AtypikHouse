<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TypeLogement;
use Illuminate\Support\Facades\Validator;
use App\Models\Annonce;

use Carbon\Carbon;

class TypeLogementController extends Controller
{

    public function deleteTypeLogement($id)
    {

        $prop = TypeLogement::where('name' , 'Autre')->get();
        $annonces = Annonce::where('type_logement_id' , $id)->update([
           'type_logement_id' => $prop[0]->id,
           'updated_at' => Carbon::now(),

        ]);
        $proprety= TypeLogement::where('id' , $id)->delete();

        return response()->json([
            'status' => "deleted",
        ]);
    }

    public function typeLogementForAnnonce(Request $request)
    {

        $typeLogement = TypeLogement::where('id' , $request->id)->get();
        return response()->json([
            'typeLogement' => $typeLogement
        ]);

    }

    
    public function addTypeLogement(Request $request){
        $validator = Validator::make($request->all(), [
            "name" => "required|min:3",
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => "invalid",
                'errors' => $validator->errors()
            ], 422);
        } else {
        $typeLogement = TypeLogement::create([
            'name' => $request->name,
        ]);
    }
        return response()->json([
            'typeLogement' => $typeLogement
        ]);
    }



    public function getTypeLogement(){
        $typesLogement = TypeLogement::all();
        return response()->json([
            'typesLogement' => $typesLogement
        ]);
    }




}

