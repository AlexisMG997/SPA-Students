<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class promedios extends Model
{
    use HasFactory;

    protected $table = 'promedios';

    protected $primaryKey = 'id';

    public function alumno(){
        return $this->belongsTo(alumno::class, 'id');
    }
    public function tsu(){
        return $this->hasOne(tsu::class, 'promedioId');
    }
    public function ingenieria(){
        return $this->hasOne(ingenieria::class, 'promedioId');
    }
}
