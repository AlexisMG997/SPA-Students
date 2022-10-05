<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class conyuge extends Model
{
    use HasFactory;

    protected $table = 'conyuge';

    protected $primaryKey = 'id';

    public function datosFamiliares(){
        return $this->belongsTo(datosFamiliares::class, 'id');
    }
}
