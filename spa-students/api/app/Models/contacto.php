<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class contacto extends Model
{
    use HasFactory;

    protected $table = 'contacto';

    protected $primaryKey = 'id';

    public function DatosPersonales()
    {
        return $this->belongsto(DatosPersonales::class, 'id'); 
    }

    public function correoElectronico()
    {
        return $this->hasOne(correoElectronico::class, 'contactoId'); 
    }
    public function telefono()
    {
        return $this->hasOne(telefono::class, 'contactoId'); 
    }
}
