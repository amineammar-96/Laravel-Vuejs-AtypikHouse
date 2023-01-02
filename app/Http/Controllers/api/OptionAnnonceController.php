<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\OptionAnnonce;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;

class OptionAnnonceController extends Controller
{



    public function getOptions()
    {
        $options=OptionAnnonce::all();
        return response()->json([
            'options' => $options
        ]);
    }

    public function updateOptionTypeLogementState(Request $request){

        $option = OptionAnnonce::where('id' , $request->id)->get();

        $option[0]->typesLogementIds =json_decode($option[0]->typesLogementIds);

        $tableAux=array();

        $tableAux=$option[0]->typesLogementIds;


        foreach ( $option[0]->typesLogementIds  as $key => $value) {
            if($value==$request->type_logement_id){

                array_splice($tableAux, $key, 1);

                $option[0]->typesLogementIds =  $tableAux;


                $op=OptionAnnonce::where('id' , $request->id)->update([
                    'updated_at' => Carbon::now(),
                    'typesLogementIds' => $option[0]->typesLogementIds  ,
                ]);
                return response()->json([
                    'status' => 'deleted',
                    'typesLogementIds' => $option[0]->typesLogementIds  ,
                    'op' => OptionAnnonce::where('id' , $request->id)->get()

                ]);
            }



            if ($value!=$request->type_logement_id && $key+1==count($tableAux)) {

                array_push($tableAux, $request->type_logement_id );
                $option[0]->typesLogementIds =  $tableAux;

                OptionAnnonce::where('id' , $request->id)->update([
                    'updated_at' => Carbon::now(),
                    'typesLogementIds' => $option[0]->typesLogementIds
                ]);

                return response()->json([
                    'status' => 'added',
                    'typesLogementIds' => $option[0]->typesLogementIds  ,
                    'op' => OptionAnnonce::where('id' , $request->id)->get()


                ]);
            }
        }




    }



    public function addOption(Request $request){
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
        $option = OptionAnnonce::create([
            "name" => $request->name,
            "typesLogementIds" => json_encode($request->typesLogementIds),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json([
            'created' => 'created',
            'option' => $option
        ]);
    }

    }





    public function getOptionsByTypeLogement(Request $request){
        $option = OptionAnnonce::all();
        $optionsElements=[];
        for ($i=0; $i <count($option) ; $i++) {
            for ($j=0; $j < count(json_decode($option[$i]->typesLogementIds)); $j++) {
                if((json_decode($option[$i]->typesLogementIds))[$j]==$request->type_logement_id){


                    array_push($optionsElements,$option[$i]);
                }
            }


        }

        return response()->json([
            'optionsElements' => $optionsElements
        ]);
    }





    public function getTypesOfLogementByOption(Request $request)
    {
        $typesLogementByOption=OptionAnnonce::where('id' , $request->id)->get();

        return response()->json([
            'typesLogementByOption' => $typesLogementByOption
        ]);
    }






}

