<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class telefono extends Model
{
    use HasFactory;

    protected $table = 'telefono';

    protected $primaryKey = 'id';
    
    public function contacto(){
        return $this->belongsTo(contacto::class, 'id');
    }
}
