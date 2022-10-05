<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class entidadFederativa extends Model
{
    use HasFactory;

    protected $table = 'entidadFederativa';

    protected $primaryKey = 'id';

    public function LugarDeNacimiento(){
        return $this->belongsTo(LugarDeNacimiento::class, 'id');
    }
}
