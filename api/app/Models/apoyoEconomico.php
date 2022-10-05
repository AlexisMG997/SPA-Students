<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class apoyoEconomico extends Model
{
    use HasFactory;

    protected $table = 'apoyoEconomico';

    protected $primaryKey = 'id';

    public function datosEconomicos(){
        return $this->belongsTo(datosEconomicos::class, 'id');
    }
}
