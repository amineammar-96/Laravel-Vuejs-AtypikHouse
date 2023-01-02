<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Conversation;

class Message extends Model
{
    use HasFactory;
    protected $fillable = [
        'content',
        'sender_user_id',
        'receiver_user_id',
        'readingState',
        'from_name',
        'to_name',
        'conversation_id',
    ];

    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i:s',
        'updated_at' => 'datetime:d-m-Y H:i:s',
    ];

    public function conversation()
    {
        return $this->belongsTo(Conversation::class);
    }
}
