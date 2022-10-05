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
        Schema::create('ingenieria', function (Blueprint $table) {
            $table->increments('id');
            $table->string('porCuatrimestre', 100);
            $table->double('promedio');

            $table->unsignedInteger('promedioId');

            $table->foreign('promedioId')->references('id')->on('promedios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ingenieria');
    }
};
