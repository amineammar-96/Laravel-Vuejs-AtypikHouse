<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Message;

class Conversation extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'receiver_id',
    ];

    protected $casts = [
        'read_at' => 'datetime:d-m-Y H:i',
        'created_at' => 'datetime:d-m-Y H:i',
        'updated_at' => 'datetime:d-m-Y H:i',
    ];


    public function sender() {
        return $this->belongsTo('App\Models\User', 'user_id');
    }

    public function receiver() {
        return $this->belongsTo('App\Models\User', 'receiver_id');
    }


    public function messages()
    {
        return $this->hasMany(Message::class);
    }



}
