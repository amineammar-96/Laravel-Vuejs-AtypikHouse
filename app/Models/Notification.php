<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class Notification extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'type',
       'from_id',
       'user_id',
       'read_at',
       'content',
       'link'
    ];

    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i',
        'updated_at' => 'datetime:d-m-Y H:i',
        'read_at' => 'datetime:d-m-Y H:i',

    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
