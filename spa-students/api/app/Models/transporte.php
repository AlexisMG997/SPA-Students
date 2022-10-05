<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class transporte extends Model
{
    use HasFactory;

    protected $table = 'transporte';

    protected $primaryKey = 'id';

    public function datosEconomicos(){
        return $this->belongsTo(datosEconomicos::class, 'id');
    }
}
