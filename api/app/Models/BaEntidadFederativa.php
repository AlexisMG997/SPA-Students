<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BaEntidadFederativa extends Model
{
    use HasFactory;

    protected $table = 'BaEntidadFederativa';

    protected $primaryKey = 'id';

    public function datosEscolares(){
        return $this->belongsTo(datosEscolares::class, 'id');
    }
}
