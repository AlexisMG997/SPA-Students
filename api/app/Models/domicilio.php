<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class domicilio extends Model
{
    use HasFactory;

    protected $table = 'domicilio';

    protected $primaryKey = 'id';

    public function DatosPersonales(){
        return $this->belongsTo(DatosPersonales::class, 'id');
    }
    public function municipio()
    {
        return $this->hasOne(municipio::class, 'DomId'); 
    }

}
