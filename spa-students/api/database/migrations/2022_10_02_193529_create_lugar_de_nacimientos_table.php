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
        Schema::create('LugarDeNacimiento', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ciudad', 10);

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
        Schema::dropIfExists('LugarDeNacimiento');
    }
};
