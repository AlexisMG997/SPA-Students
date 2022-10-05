<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class datosLaborales extends Model
{
    use HasFactory;

    protected $table = 'datosLaborales';

    protected $primaryKey = 'id';

    public function alumno(){
        return $this->belongsTo(alumno::class, 'id');
    }
    public function empresa(){
        return $this->hasOne(empresa::class, 'laborId');
    }
}
