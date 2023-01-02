<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Annonce;

class Indisponibility extends Model
{
    use HasFactory;

    protected $fillable = [
        'owner_id',
        'annonce_id',
        'id',
        'dateFrom',
        'dateTo',
        'motif',


    ];

    protected $casts = [
        'dateFrom' => 'datetime:d-m-Y',
        'dateTo' => 'datetime:d-m-Y',
        'created_at' => 'datetime:d-m-Y H:i',
        'updated_at' => 'datetime:d-m-Y H:i',
    ];

    public function annonce()
    {
        return $this->belongsTo(Annonce::class);
    }

}
