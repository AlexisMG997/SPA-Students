<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class periodo extends Model
{
    use HasFactory;

    protected $table = 'periodo';

    protected $primaryKey = 'id';

    public function grupo(){
        return $this->belongsTo(grupo::class, 'id');
    }
}
