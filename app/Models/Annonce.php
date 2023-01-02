<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Images;
use App\Models\User;
use App\Models\Like;
use App\Models\Indisponibility;
use App\Models\Reservation;

use App\Models\TypeLogement;

class Annonce extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'address',
        'compAddress',
        'city',
        'country',
        'postalCode',
        'user_id',
        'surface',
        'capacity',
        'description',
        'animaux',
        'informationsSupp',
        'numberOfBeds',
        'type_logement_id',
        'servicesLogement',
        'optionsLogement',
        'price',
        'suppPropretiesAnnonce'
    ];


    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i',
        'updated_at' => 'datetime:d-m-Y H:i',
        'suppPropretiesAnnonce' => 'array',
    ];


    public function user(){
        return $this->belongsTo(User::class);
    }
    public function images(){
        return $this->hasMany(Images::class);
    }
    public function Indisponibilities(){
        return $this->hasMany(Indisponibility::class);
    }
    public function likes(){
        return $this->hasMany(Like::class);
    }

    public function reservations(){
        return $this->hasMany(Reservation::class);
    }

    public function type_logement(){
        return $this->hasOne(TypeLogement::class);
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }
}
