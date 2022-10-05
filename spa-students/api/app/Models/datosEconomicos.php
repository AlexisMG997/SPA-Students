<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class datosEconomicos extends Model
{
    use HasFactory;

    protected $table = 'datosEconomicos';

    protected $primaryKey = 'id';

    public function alumno(){
        return $this->belongsTo(alumno::class, 'id');
    }
    public function viveCon(){
        return $this->hasOne(viveCon::class, 'EcoId');
    }
    public function vivienda(){
        return $this->hasOne(vivienda::class, 'EcoId');
    }
    public function transporte(){
        return $this->hasOne(transporte::class, 'EcoId');
    }
    public function apoyoEconomico(){
        return $this->hasOne(apoyoEconomico::class, 'EcoId');
    }
    public function ingresosFamiliares(){
        return $this->hasOne(ingresosFamiliares::class, 'EcoId');
    }
}
