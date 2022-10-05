<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class alumno extends Model
{
    use HasFactory;

    protected $table = 'alumno';

    protected $primaryKey = 'id';


    public $timestamps = false;


    public function DatosPersonales()
    {
        return $this->hasOne(DatosPersonales::class, 'AlumnoId'); 
    }
    public function datosFamiliares()
    {
        return $this->hasOne(datosFamiliares::class, 'AlumnoId'); 
    }
    public function datosLaborales()
    {
        return $this->hasOne(datosLaborales::class, 'AlumnoId'); 
    }
    public function datosEconomicos()
    {
        return $this->hasOne(datosEconomicos::class, 'AlumnoId'); 
    }
    public function datosEscolares()
    {
        return $this->hasOne(datosEscolares::class, 'AlumnoId'); 
    }
    public function promedios()
    {
        return $this->hasOne(promedios::class, 'AlumnoId'); 
    }
    
}
