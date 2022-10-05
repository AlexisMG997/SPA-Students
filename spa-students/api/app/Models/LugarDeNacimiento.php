<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LugarDeNacimiento extends Model
{
    use HasFactory;

    protected $table = 'LugarDeNacimiento';

    protected $primaryKey = 'id';

    public function DatosPersonales(){
        return $this->belongsTo(DatosPersonales::class, 'id');
    }
    public function entidadFederativa()
    {
        return $this->hasOne(entidadFederativa::class, 'LugarId'); 
    }
}
