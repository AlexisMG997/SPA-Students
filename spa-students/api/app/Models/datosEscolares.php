<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class datosEscolares extends Model
{
    use HasFactory;

    protected $table = 'datosEscolares';

    protected $primaryKey = 'id';

    public function alumno(){
        return $this->belongsTo(alumno::class, 'id');
    }
    public function tipoBachillerato(){
        return $this->hasOne(tipoBachillerato::class, 'escuelaId');
    }
    public function BaEntidadFederativa(){
        return $this->hasOne(BaEntidadFederativa::class, 'escuelaId');
    }
    
}
