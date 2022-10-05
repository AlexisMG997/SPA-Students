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
        Schema::create('correoElectronico', function (Blueprint $table) {
            $table->increments('id');
            $table->string('personal', 50);
            $table->string('institucional', 50);

            $table->unsignedInteger('contactoId');
            $table->foreign('contactoId')->references('id')->on('contacto');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('correoElectronico');
    }
};
