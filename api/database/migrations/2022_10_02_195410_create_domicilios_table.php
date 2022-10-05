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
        Schema::create('domicilio', function (Blueprint $table) {
            $table->increments('id');
            $table->string('calle', 100);
            $table->string('numero', 50);
            $table->string('colonia', 50);
            
            $table->unsignedInteger('DatosId');
            $table->foreign('DatosId')->references('id')->on('DatosPersonales');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('domicilio');
    }
};
