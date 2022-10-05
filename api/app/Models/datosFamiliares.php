<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class datosFamiliares extends Model
{
    use HasFactory;

    protected $table = 'datosFamiliares';

    protected $primaryKey = 'id';

    public function alumno(){
        return $this->belongsTo(alumno::class, 'id');
    }
    public function padre(){
        return $this->hasOne(padre::class, 'FamId');
    }
    public function emergencia(){
        return $this->hasOne(emergencia::class, 'FamId');
    }
    public function madre(){
        return $this->hasOne(padre::class, 'FamId');
    }
    public function conyuge(){
        return $this->hasOne(conyuge::class, 'FamId');
    }

}
