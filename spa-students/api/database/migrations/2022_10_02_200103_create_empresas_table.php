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
        Schema::create('empresa', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre', 100)->nullable();
            $table->string('domicilio', 100)->nullable();
            $table->string('telefono', 20)->nullable();
            $table->string('puesto', 50)->nullable();
            $table->string('departamento', 50)->nullable();

            $table->unsignedInteger('laborId');

            $table->foreign('laborId')->references('id')->on('datosLaborales');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empresa');
    }
};
