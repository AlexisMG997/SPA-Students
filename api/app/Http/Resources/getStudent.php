<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class getStudent extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'matricula' => $this->matricula,
            'nombreCompleto' => $this->nombreCompleto,
            'foto' => $this->foto,
            'datosPersonales'=> new datosPersonales($this->datosPersonales),
            'datosFamiliares'=> new datosFamiliares($this->datosFamiliares),
            'datosLaborales'=> new datosLaborales($this->datosLaborales),
            'datosEconomicos'=> new datosEconomicos($this->datosEconomicos),
            'datosEscolares'=> new datosEscolares($this->datosEscolares),
            'promedios'=> new promedios($this->promedios),
        ];
    }
}
