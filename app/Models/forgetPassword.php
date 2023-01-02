<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class forgetPassword extends Model
{
    use HasFactory;
    protected $fillable = ['id' , 'token' , 'email' , 'created_at' ];
    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i:s',
    ];
    public $timestamps = false;
}
