<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class madre extends Model
{
    use HasFactory;

    protected $table = 'madre';

    protected $primaryKey = 'id';

    public function datosFamiliares(){
        return $this->belongsTo(datosFamiliares::class, 'id');
    }
}
