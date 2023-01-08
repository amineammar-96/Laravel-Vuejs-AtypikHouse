<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Annonce;
use App\Models\Images;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
use App\Models\Reservation;
use App\Models\TypeLogement;
use App\Models\userInfo;
use Illuminate\Support\Facades\Mail;

class reservationController extends Controller
{

    public function getAllReservation()
    {
        $reservations = Reservation::with('annonce')->with('user')->get();
        $reservationStats=[];

        for ($i=0; $i < count($reservations) ; $i++) {
            $images = Images::where('annonce_id' , $reservations[$i]->annonce_id)->get();
            $clientInfo = userInfo::where('user_id' , $reservations[$i]->user_id)->get();

            $annonce = Annonce::where('id' , $reservations[$i]->annonce_id)->get();
            $owner = User::where('id' , $annonce[0]->user_id)->get();
            $ownerInfo = userInfo::where('user_id' , $annonce[0]->user_id)->get();

            $reservations[$i]->ownerInfo=$ownerInfo[0];
            $reservations[$i]->owner=$owner[0];


            $reservations[$i]->clientInfo=$clientInfo[0];

            $reservations[$i]->images=$images;


        }

        if(count($reservations)){$reservationStats = Reservation::select('bookState')->groupBy('bookState')->get();}



        return response()->json([
            'reservations' => $reservations,
            'reservationStats' => $reservationStats,
           ]);


    }

    public function getReservationById(Request $request)
    {
        $reservation = Reservation::where('id' , $request->id )->with('user')->with('annonce')->get();

        $images = Images::where('annonce_id' , $reservation[0]->annonce_id)->get();

        $reservation[0]->images = $images;
        return response()->json([
            'reservation' => $reservation
        ]);

    }



    public function getReservationByAnnonce(Request $request )
    {
        $reservations = Reservation::where('annonce_id' , $request->annonce_id )->where('bookState' , '<>' ,  'Annulée')->get();
        return response()->json([
            'reservations' => $reservations
        ]);

    }

    public function getReservationByUser(Request $request)
    {
        $reservationStats=[];

        $reservations = Reservation::where('user_id' , $request->user_id )->with("annonce")->orderBy('created_at' , 'desc')->get();
        $lastThreeReservations = Reservation::where('user_id' , $request->user_id )->with("annonce")->orderBy('created_at' , 'desc')->limit(3)->get();
        for ($i=0; $i < count($lastThreeReservations) ; $i++) {
            $images = Images::where('annonce_id' , $lastThreeReservations[$i]->annonce_id)->get();
            $lastThreeReservations[$i]->images=$images;

        }

        if(count($reservations)){$reservationStats = Reservation::select('bookState')->groupBy('bookState')->get();}
        $reservationCount=0;
        $totalAmount=0;
        $totalNightsCount=0;
        for ($i=0; $i < count($reservations) ; $i++) {
            if($reservations[$i]->bookState!="Annulée"){
                $reservationCount++;
            }
            $totalAmount+=$reservations[$i]->amount;
            $totalNightsCount+=$reservations[$i]->nightCount;
            $images = Images::where('annonce_id' , $reservations[$i]->annonce_id)->get();
            $reservations[$i]->images=$images;
        }

        return response()->json([
            'reservations' => $reservations,
            'reservationStats' => $reservationStats,
            'totalAmount' => $totalAmount,
            'reservationCount' => $reservationCount,
            'totalNightsCount' => $totalNightsCount,
            'lastThreeReservations' => $lastThreeReservations,

        ]);

    }


    public function addReservation(Request $request)
    {

        $reservationsForAnnonce=Reservation::where('annonce_id', $request->annonce_id)
    ->where('checkIn', '<=', $request->checkOut)
    ->where('checkOut', '>=', $request->checkIn)
    ->get();


     if(count($reservationsForAnnonce)==0){

        $reservation = Reservation::create([
            'annonce_id' => $request->annonce_id,
            'user_id' => $request->user_id,
            'bookState' => $request->bookState,
            'amount' => $request->amount,
            'nightCount' => $request->nightCount,

            'paymentMethod' => $request->paymentMethod,
            'checkIn' => $request->checkIn,
            'checkOut' => $request->checkOut,
            "updated_at"=>Carbon::now(),
            "created_at"=>Carbon::now(),
        ]);





        $userInfo = User::where('id' , $request->user_id)->with('userInfo')->get();
        $annonce = Annonce::where('id' , $request->annonce_id)->with('images')->get();
        $ownerInfo = User::where('id' , $annonce[0]->user_id)->with('userInfo')->get();

        $userProfile=userInfo::where('user_id' , $request->user_id)->get();
        $ownerProfile=userInfo::where('user_id' , $annonce[0]->user_id)->get();

        $annonceCoverImage = Images::where('annonce_id' , $annonce[0]->id)->where('default' , "true")->get();


        $typeLogement=TypeLogement::where('id' , $annonce[0]->type_logement_id)->get();


        $details = [
            'reservation' => $reservation ,
            'annonce' => $annonce[0] ,
            'user' => $userInfo[0] ,
            'owner' => $ownerInfo[0] ,
            'userProfile' => $userProfile[0] ,
            'ownerProfile' => $ownerProfile[0] ,
            'typeLogement' => $typeLogement[0] ,
            'annonceCoverImage' => $annonceCoverImage[0] ,


        ];


        Mail::to($userInfo[0]->email)->send(new \App\Mail\ReservationConfirmedEmail($details));
        Mail::to($ownerInfo[0]->email)->send(new \App\Mail\ReservationConfirmedEmail($details));


        $adminArray =User::where('role' , 'admin')->orWhere('role' , 'moderateur')->get();

        foreach ($adminArray as $key => $admin) {
            $notification = Notification::create([
                'content' => "Une nouvelle réservation vient d'étre passer (Ref:#ATKRES0000".$reservation->id.")",
                'from_id' => $request->user_id,
                'user_id' => $admin->id,
                'link' => "/dashboardAdmin",

                'type' => "confirmation",
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }




        $notification = Notification::create([
            'content' => "Votre réservation à été confirmée (Ref:#ATKRES0000".$reservation->id.")",
            'from_id' => $request->user_id,
            'user_id' => $request->user_id,
            'link' => "/dashboardClient",

            'type' => "confirmation",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        $notification = Notification::create([
            'content' => "Vient de réserver un de vos logements proposés (Ref:#ATKRES0000".$reservation->id.")",
            'from_id' => $request->user_id,
            'user_id' => $ownerInfo[0]->id,
            'link' => "/dashboardOwner",

            'type' => "confirmation",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        return response()->json([
            'status' => 'created',
            'reservation' => $reservation
        ]);
     }else{
        return response()->json([
            'status' => 'indisponible'
        ]);
     }

    }

    public function cancelReservation(Request $request)
    {
        $reservationAux=Reservation::where('id', $request->reservation_id)->get();

        $reservation = Reservation::where('id', $request->reservation_id)->update([
            'bookState' => $request->bookState,
            "updated_at"=>Carbon::now(),
        ]);

        $adminArray =User::where('role' , 'admin')->orWhere('role' , 'moderateur')->get();

        foreach ($adminArray as $key => $admin) {
            $notification = Notification::create([
                'content' => "Une réservation à été annulé (Ref: #ATKRES0000".$request->reservation_id.")" ,
                'from_id' => $reservationAux[0]->user_id,
                'user_id' => $admin->id,
                'link' => "/dashboardAdmin",

                'type' => "annulation",
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }




        $notification = Notification::create([
            'content' => "Votre réservation à été annuler (Ref: #ATKRES0000".$request->reservation_id.")" ,
            'from_id' => $reservationAux[0]->user_id,
            'user_id' => $reservationAux[0]->user_id,
            'link' => "/dashboardClient",

            'type' => "annulation",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        $annonce=Annonce::where('id' , $reservationAux[0]->annonce_id)->get();
        $owner=User::where('id' , $annonce[0]->user_id )->get();


        $notification = Notification::create([
            'content' => "Vient d'annuler une réservation (Ref: #ATKRES0000".$request->reservation_id.")" ,
            'from_id' => $reservationAux[0]->user_id,
            'user_id' => $owner[0]->id,
            'link' => "/dashboardOwner",

            'type' => "annulation",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);


        return response()->json([
            'reservation' => $reservation
        ]);

    }

    public function deleteReservation($id)
    {
        $reservation = Reservation::where('id', $id)->delete();

        return response()->json([
            'reservation' => $reservation
        ]);

    }

    public function updateBookStateReservation(Request $request)
    {
        $reservation = Reservation::where('id', $request->reservation_id)->update([
            'bookState' => $request->bookState,
            'updated_at' => Carbon::now(),
        ]);

        return response()->json([
            'reservation' => $reservation
        ]);

    }






}

