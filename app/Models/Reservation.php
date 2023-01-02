<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Annonce;
use App\Models\User;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'bookState',
       'checkIn',
       'checkOut',
       'annonce_id',
       'user_id',
       'amount',
       'paymentMethod',
       'nightCount',

    ];

    protected $casts = [
        'created_at' => 'date:d-m-Y',
        'updated_at' => 'datetime:d-m-Y H:i',

    ];


    public function annonce()
    {
        return $this->belongsTo(Annonce::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
