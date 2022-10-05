<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class estadoCivil extends Model
{
    use HasFactory;

    protected $table = 'estadoCivil';

    protected $primaryKey = 'id';

    public function DatosPersonales(){
        return $this->belongsTo(DatosPersonales::class, 'id');
    }
}
