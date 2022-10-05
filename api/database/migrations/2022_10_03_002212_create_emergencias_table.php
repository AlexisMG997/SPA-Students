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
        Schema::create('emergencia', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre', 20);
            $table->string('parentezco', 30);
            $table->string('telefono', 20);
            
            $table->unsignedInteger('FamId');

            $table->foreign('FamId')->references('id')->on('datosFamiliares');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('emergencia');
    }
};
