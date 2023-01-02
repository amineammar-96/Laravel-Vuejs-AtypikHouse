<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use App\Models\userInfo;

use App\Models\userAvatar;

use App\Models\Annonce;

use App\Models\Notification;

use App\Models\Like;

use App\Models\Reservation;

use App\Models\Conversation;

use App\Models\Comment;

use App\Models\AnnonceVisit;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'password',
        'role',
        'remember_token',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        // 'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */

    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i',
        'updated_at' => 'datetime:d-m-Y H:i',
        'email_verified_at' => 'datetime:d-m-Y H:i',

    ];

     public function userInfo()
    {
        return $this->hasOne(userInfo::class);
    }

    public function userAvatar()
    {
        return $this->hasOne(userAvatar::class);
    }

    public function likes(){
        return $this->hasMany(Like::class);
    }

    public function user_annonces(){
        return $this->hasMany(Annonce::class);
    }


    public function notifications(){
        return $this->hasMany(Notification::class);
    }


    public function reservations(){
        return $this->hasMany(Reservation::class);
    }

    public function conversations(){
        return $this->hasMany(Conversation::class);
    }


    public function comments(){
        return $this->hasMany(Comment::class);
    }


    public function annonceVisit(){
        return $this->hasMany(AnnonceVisit::class);
    }

}
