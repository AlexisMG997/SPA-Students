<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class datosPersonales extends Model
{
    use HasFactory;

    protected $table = 'datosPersonales';

    protected $primaryKey = 'id';

    //Pertenece a alumno
    public function alumno(){
        return $this->belongsTo(alumno::class, 'id');
    }
    //Tablas Hijas
    public function LugarDeNacimiento()
    {
        return $this->hasOne(LugarDeNacimiento::class, 'DatosId'); 
    }
    public function genero()
    {
        return $this->hasOne(genero::class, 'DatosId'); 
    }
    public function estadoCivil()
    {
        return $this->hasOne(estadoCivil::class, 'DatosId'); 
    }
    public function domicilio()
    {
        return $this->hasOne(domicilio::class, 'DatosId'); 
    }
    public function contacto()
    {
        return $this->hasOne(contacto::class, 'DatosId'); 
    }
}
