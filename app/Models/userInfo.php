<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;


class userInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'phone',
        'address',
        'addressComm',
        'city',
        'country',
        'postalCode',
        'user_id',
    ];


    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i',
        'updated_at' => 'datetime:d-m-Y H:i',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }


}
