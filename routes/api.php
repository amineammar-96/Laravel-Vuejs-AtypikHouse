<?php

use App\Http\Controllers\api\AnnonceController;
use App\Http\Controllers\api\AnnonceVisitController;
use App\Http\Controllers\api\CommentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\UserInfoController;
use App\Http\Controllers\api\ImagesController;
use App\Http\Controllers\api\ForgetPasswordController;

use App\Http\Controllers\Api\UserAvatarController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\NotificationController;

use App\Http\Controllers\Api\LikesController;
use App\Http\Controllers\Api\IndisponibilityController;
use App\Http\Controllers\Api\OptionAnnonceController;
use App\Http\Controllers\Api\PropretyController;
use App\Http\Controllers\Api\reservationController;
use App\Http\Controllers\Api\ServiceAnnonceController;
use App\Http\Controllers\Api\TypeLogementController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::group(['middleware' => 'auth:api'] , function(){

//     Route::post("/getUser" , [UserController::class , "index"]);

// });
Route::post("login" , [UserController::class , "login"]);

Route::middleware('auth:api')->group( function () {

    Route::post("/getUser" , [UserController::class , "index"]);

});


Route::post('/signupClient' , [UserController::class , "signupClient"]);
// Route::post("/getUser" , [UserController::class , "index"])->middleware('auth:api');

Route::post("/getUserByRole" , [UserController::class , "getUserByRole"])
->withoutMiddleware('throttle:api')
->middleware('throttle:300:1');

Route::delete("/deleteUser/{id}" , [UserController::class , "deleteUser"]);
Route::post("/adminUpdate" , [UserController::class , "adminUpdate"]);
Route::post("/getUserInfo" , [UserInfoController::class , "getUserInfo"]);
Route::post("/saveUserInfo" , [UserInfoController::class , "saveUserInfo"]);
Route::post("/updatePasswordUser" , [UserController::class , "updatePasswordUser"]);
Route::post("/forgotPasswordEmailStatus", [ForgetPasswordController::class , "index"]);
Route::post("/verifyResetToken", [ForgetPasswordController::class , "verifyResetToken"]);
Route::post("/resetPassword", [ForgetPasswordController::class , "update"]);
Route::post("/emailVerification", [UserController::class , "emailVerification"]);
Route::post("/contactFormMailTo", [UserController::class , "contactFormMailTo"]);
Route::post("/mailVertificationRequest" , [UserController::class , "mailVertificationRequest"]);



Route::post("/addAnnonce" , [AnnonceController::class , "addAnnonce"]);
Route::post("/getAnnonceByUserId" , [AnnonceController::class , "getAnnonceByUserId"]);
Route::post("/getAnnonceById" , [AnnonceController::class , "getAnnonceById"]);
Route::get('getAnnonces' , [AnnonceController::class , 'getAnnonces'] );
Route::post("/updateAnnonce" , [AnnonceController::class , "updateAnnonce"]);
Route::delete("/deleteAnnonce/{id}" , [AnnonceController::class , "deleteAnnonce"]);
Route::get('getAnnoncesByTypeLogementId/{id}' , [AnnonceController::class , 'getAnnoncesByTypeLogementId'] );


Route::post("/uploadAnnonceImages" , [ImagesController::class , "uploadAnnonceImages"]);
Route::get("/getOneAnnonceImageByImageId" , [ImagesController::class , "getOneAnnonceImageByImageId"]);

Route::post("/getAnnonceCoverImage" , [ImagesController::class , "getAnnonceCoverImage"]);
Route::get("/getAnnonceCoverImageFromApi" , [ImagesController::class , "getAnnonceCoverImageFromApi"]);

Route::post("/deleteImagesOnUpdateAnnonce" , [ImagesController::class , "deleteImages"]);
Route::post("/updateImageByDefaultState" , [ImagesController::class , "updateImageByDefaultState"]);




Route::post("/uploadAvatar" , [UserAvatarController::class , "uploadAvatar"]);
Route::post("/updateAvatar" , [UserAvatarController::class , "updateAvatar"]);
Route::post("/getAvatarByUserId" , [UserAvatarController::class , "getAvatarByUserId"]);
Route::get("/sendUserAvatarImage/{id}" , [UserAvatarController::class , "sendUserAvatarImage"]);


Route::post("/sendMessageMobile" , [MessageController::class , "sendMessageMobile"]);


Route::post("/sendMessage" , [MessageController::class , "sendMessage"]);
Route::post("/getUserMessages" , [MessageController::class , "getUserMessages"]);
Route::post("/changeMessageReadingState" , [MessageController::class , "changeMessageReadingState"]);
Route::post("/getConversationById" , [MessageController::class , "getConversationById"]);



Route::post("/sendNotification" , [NotificationController::class , "sendNotification"]);
Route::post("/getUserNotifications" , [NotificationController::class , "getUserNotifications"]);
Route::post("/changeNotificationReadAt" , [NotificationController::class , "changeNotificationReadAt"]);
Route::delete("/deleteNotification/{id}" , [NotificationController::class , "deleteNotification"]);



Route::post("/getLikesForUsers" , [LikesController::class , "getLikesForUsers"]);
Route::post("/addLikeForAnnonce" , [LikesController::class , "addLike"]);
Route::post("/getLikesForAnnonce" , [LikesController::class , "getLikesForAnnonce"]);


Route::post("/addIndisponibility" , [IndisponibilityController::class , "addIndisponibility"]);
Route::post("/getIndisponibilitiesForAnnonce" , [IndisponibilityController::class , "getIndisponibilitiesForAnnonce"]);
Route::delete("/deleteIndispo/{id}" , [IndisponibilityController::class , "deleteIndispo"]);




Route::get("/getAllReservation" , [reservationController::class , "getAllReservation"]);
Route::post("/getReservationById" , [reservationController::class , "getReservationById"]);
Route::post("/getReservationByUser" , [reservationController::class , "getReservationByUser"]);
Route::post("/addReservation" , [reservationController::class , "addReservation"]);
Route::post("/cancelReservation" , [reservationController::class , "cancelReservation"]);


Route::delete("/deleteReservation/{id}" , [reservationController::class , "deleteReservation"]);
Route::post("/getReservationByAnnonce" , [reservationController::class , "getReservationByAnnonce"]);
Route::post("/updateBookStateReservation" , [reservationController::class , "updateBookStateReservation"]);



Route::post("/addProprety" , [PropretyController::class , "addProprety"]);
Route::get("/getPropreties" , [PropretyController::class , "getPropreties"]);
Route::post("/getPropretiesByTypeLogement" , [PropretyController::class , "getPropretiesByTypeLogement"]);
Route::post("/updatePropretyTypeLogementState" , [PropretyController::class , "updatePropretyTypeLogementState"]);
Route::post("/getTypesOfLogementByProprety" , [PropretyController::class , "getTypesOfLogementByProprety"]);
Route::post("/updateRequiredProprety" , [PropretyController::class , "updateRequiredProprety"]);
Route::post("/deletePropretyById" , [PropretyController::class , "deletePropretyById"]);
Route::get("/getPropretyById/{id}" , [PropretyController::class , "getPropretyById"]);



Route::post("/addTypeLogement" , [TypeLogementController::class , "addTypeLogement"]);
Route::get("/getTypeLogement" , [TypeLogementController::class , "getTypeLogement"]);
Route::post("/typeLogementForAnnonce" , [TypeLogementController::class , "typeLogementForAnnonce"]);
Route::delete("/deleteTypeLogement/{id}" , [TypeLogementController::class , "deleteTypeLogement"]);



Route::get("/getServices" , [ServiceAnnonceController::class , "getServices"]);
Route::post("/addService" , [ServiceAnnonceController::class , "addService"]);
Route::post("/getTypesOfLogementByService" , [ServiceAnnonceController::class , "getTypesOfLogementByService"]);
Route::post("/updateServiceTypeLogementState" , [ServiceAnnonceController::class , "updateServiceTypeLogementState"]);
Route::post("/getServicesByTypeLogement" , [ServiceAnnonceController::class , "getServicesByTypeLogement"]);


Route::get("/getOptions" , [OptionAnnonceController::class , "getOptions"]);
Route::post("/addOption" , [OptionAnnonceController::class , "addOption"]);
Route::post("/getTypesOfLogementByOption" , [OptionAnnonceController::class , "getTypesOfLogementByOption"]);
Route::post("/updateOptionTypeLogementState" , [OptionAnnonceController::class , "updateOptionTypeLogementState"]);
Route::post("/getOptionsByTypeLogement" , [OptionAnnonceController::class , "getOptionsByTypeLogement"]);



Route::post("/addComment" , [CommentController::class , "addComment"]);
Route::post("/getAnnonceComments" , [CommentController::class , "getAnnonceComments"]);
Route::post("/getAverageRatingForCommentsByAnnonce" , [CommentController::class , "getAverageRatingForCommentsByAnnonce"]);


Route::post("/addAnnonceVisit" , [AnnonceVisitController::class , "addAnnonceVisit"]);
Route::post("/getAnnonceThreeLastVisitForUser" , [AnnonceVisitController::class , "getAnnonceThreeLastVisitForUser"]);

