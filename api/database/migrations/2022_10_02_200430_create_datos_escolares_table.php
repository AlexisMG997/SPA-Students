<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('datosEscolares', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombreBachillerato', 20);
            
            $table->unsignedInteger('AlumnoId');

            $table->foreign('AlumnoId')->references('id')->on('alumno');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('datosEscolares');
    }
};
