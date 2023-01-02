<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Annonce;
use App\Models\Images;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;


class ImagesController extends Controller
{

    public function getAnnonceCoverImage(Request $request)
    {

        $image = Images::where('annonce_id' , $request->id)->where('default' , "true");
        return response()->json([
            'status'=>"found",
            'image' => $image
        ]);

    }


    public function getAnnonceCoverImageFromApi(Request $request)
    {

        $image = Images::where('annonce_id' , $request->id)->where('default' , "true")->get();
        if(count($image)>0){


            $path = public_path("/storage/".$image[0]->path."/".$image[0]->image);

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


    public function getOneAnnonceImageByImageId(Request $request)
    {

            $annonceImage= Images::where('id' , $request->img_id)->get();
            if(count($annonceImage)>0){


            $path = public_path("/storage/".$annonceImage[0]->path."/".$annonceImage[0]->image);

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


    public function uploadAnnonceImages(Request $request)
    {
        $uploadedImages= $request->images;

        $annonce_id=$request->annonce_id;
        $user=User::where('id' , $request->user_id)->get();
        if(count($request->images)>0){
            $folderName = $user[0]->lastname."-".$user[0]->firstname."/annonceID/".$request->annonce_id;
            foreach ($uploadedImages as $key=> $image) {
                $imagesCount=random_int(1,1000);
                $image->storeAs('annonces/'.$folderName , $request->annonce_id."-".$imagesCount.".".$image->extension(), 'public');

                if($key==0){
                    $default = "true";
                }else{
                    $default = "false";
                }

                $imgs=Images::where('annonce_id' ,$annonce_id)->get();
                if(count($imgs)>0){
                    $default = "false";
                }else{
                    $default = "true";
                }

                $img =Images::create([
                    'annonce_id' => $request->annonce_id ,
                    'path' => 'annonces/'.$folderName , $request->annonce_id."-".$imagesCount.".".$image->extension() ,
                    'image' => $request->annonce_id."-".$imagesCount.".".$image->extension() ,
                    "default" => $default,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);


            }

            return response()->json([
                'status'=>"success",
                'images' => Images::where("annonce_id" , $request->annonce_id)->get(),
            ]);

        }else{
            return response()->json([
                'status'=>"failed",
            ]);
        }

    }

    public function deleteImages(Request $request)
    {

        $imagesToDelete= $request->imagesArray;
        $user=User::where('id' , $request->user_id)->get();
        if($request->imagesArray){

            foreach ($imagesToDelete as $key => $image) {
                $element=Images::where('id' , $image['id'])->get();
                $img = Images::where('id' , $image['id'])->delete();
                if($element[0]->default=="true"){
                    Images::where('id' , $request->annonce_id)->limit(1)->update([
                        'default' => "true",
                    ]);
                }
                $imageFileName = '/uploads/'.$image['path']. '/' .$image['image'];

                if (File::exists(public_path($imageFileName))) {
                    File::delete(public_path($imageFileName));

                    // unlink($imageFileName);
                }
            }



        }

        return response()->json([
            'status' => 'imagesDeleted',

        ]);


    }


    public function updateImageByDefaultState(Request $request)
    {



        $images=Images::where('annonce_id' , $request->annonce_id)->update([
            "default" => 'false',
        ]);

        $img = Images::where('id' , $request->id)->update([
            "default" => 'true',
        ]);


    }
}
