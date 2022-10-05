<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class carrera extends Model
{
    use HasFactory;

    protected $table = 'carrera';

    protected $primaryKey = 'id';

    protected $fillable = ['nombre'];

    public function grupo(){
        return $this->belongsTo(grupo::class, 'id');
    }
    public function nivel()
    {
        return $this->hasOne(nivel::class, 'carreraId'); 
    }
}
