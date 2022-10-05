<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tsu extends Model
{
    use HasFactory;

    protected $table = 'tsu';

    protected $primaryKey = 'id';

    public function promedios(){
        return $this->belongsTo(promedios::class, 'id');
    }
}
