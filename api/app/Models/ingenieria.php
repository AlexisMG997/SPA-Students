<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ingenieria extends Model
{
    use HasFactory;

    protected $table = 'ingenieria';

    protected $primaryKey = 'id';

    public function promedios(){
        return $this->belongsTo(promedios::class, 'id');
    }
}
