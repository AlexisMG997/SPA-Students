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
        Schema::create('DatosPersonales', function (Blueprint $table) {
            $table->increments('id');
            $table->date('fechaDeNacimiento');
            $table->integer('edad');
            
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
        Schema::dropIfExists('DatosPersonales');
    }
};
