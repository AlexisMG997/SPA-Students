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
        Schema::create('apoyoEconomico', function (Blueprint $table) {
            $table->increments('id');
            $table->string('idTipo', 10);
            $table->string('descripcion', 20);
            
            $table->unsignedInteger('EcoId');

            $table->foreign('EcoId')->references('id')->on('datosEconomicos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('apoyoEconomico');
    }
};
