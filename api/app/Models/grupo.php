<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class grupo extends Model
{
    use HasFactory;

    protected $table = 'grupo';

    protected $primaryKey = 'id';

    public $timestamps = false;


    public function carrera()
    {
        return $this->hasOne(carrera::class, 'idGrupo'); 
    }
    public function especialidad()
    {
        return $this->hasOne(especialidad::class, 'idGrupo'); 
    }
    public function periodo()
    {
        return $this->hasOne(periodo::class, 'idGrupo'); 
    }
    public function alumno()
    {
        return $this->belongsToMany(alumno::class,'grupoAlumno','idAlumno','idGrupo'); 
    }

}
