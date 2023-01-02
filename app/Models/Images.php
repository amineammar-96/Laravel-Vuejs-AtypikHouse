<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Annonce;

class Images extends Model
{
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i',
        'updated_at' => 'datetime:d-m-Y H:i',
    ];
    protected $fillable = ['annonce_id' , 'path' , 'image' , "default" ];

    public function annonce(){
        return $this->belongsTo(Annonce::class);
    }

}
