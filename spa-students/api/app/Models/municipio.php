<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class municipio extends Model
{
    use HasFactory;

    protected $table = 'municipio';

    protected $primaryKey = 'id';

    public function domicilio(){
        return $this->belongsTo(domicilio::class, 'id');
    }
}
