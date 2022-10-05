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
        Schema::create('carrera', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre', 100);
            $table->string('idCar', 5);
            $table->unsignedInteger('idGrupo');

            $table->foreign('idGrupo')->references('id')->on('grupo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carrera');
    }
};
