<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class userAvatar extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'path',
       'user_id'
    ];


    public function User()
    {
        return $this->belongsTo(User::class);
    }
}


