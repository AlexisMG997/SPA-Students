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
        Schema::create('grupoAlumno', function (Blueprint $table) {
            $table->unsignedInteger('idGrupo');
            $table->foreign('idGrupo')->references('id')->on('grupo');

            $table->unsignedInteger('idAlumno');
            $table->foreign('idAlumno')->references('id')->on('alumno');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grupoAlumno');
    }
};
