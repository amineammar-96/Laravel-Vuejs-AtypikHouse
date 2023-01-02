<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Annonce;

class AnnonceVisit extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'user_id',
        'annonce_id',
    ];
    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i',
        'updated_at' => 'datetime:d-m-Y H:i',
    ];

    public function annonce(){
        $this->belongsTo(Annonce::class);
    }


    public function user(){
        $this->belongsTo(user::class);
    }
}
