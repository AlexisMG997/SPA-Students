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
        Schema::create('entidadFederativa', function (Blueprint $table) {
            $table->increments('id');
            $table->string('idEn', 20);
            $table->string('nombre', 30);

            $table->unsignedInteger('LugarId');
            $table->foreign('LugarId')->references('id')->on('LugarDeNacimiento');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entidadFederativa');
    }
};
