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
        Schema::create('bachillerato', function (Blueprint $table) {
            $table->increments('id');
            $table->string('campo1', 20);
            $table->string('idTipo', 10);
            $table->string('nombre', 20);

            $table->unsignedInteger('escuelaId');

            $table->foreign('escuelaId')->references('id')->on('datosEscolares');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bachillerato');
    }
};
