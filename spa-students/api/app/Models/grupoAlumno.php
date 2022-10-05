<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class grupoAlumno extends Model
{
    use HasFactory;

    protected $table = 'grupoAlumno';

    protected $primaryKey = 'id';

    public function grupo(){
        return $this->belongsTo(grupo::class, 'id');
    }
    public function alumno(){
        return $this->hasOne(alumno::class, 'grupoAlumnoid');
    }
}
