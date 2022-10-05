<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DatosPersonales extends JsonResource
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
            'fechaDeNacimiento' => $this->fechaDeNacimiento,
            'edad' => $this->edad,
            'LugarDeNacimiento'=> new LugarDeNacimiento($this->LugarDeNacimiento),
            'genero'=> new genero($this->genero),
            'estadoCivil'=> new estadoCivil($this->estadoCivil),
            'domicilio'=> new domicilio($this->domicilio),
            'contacto'=> new contacto($this->contacto),
        ];
    }
}
