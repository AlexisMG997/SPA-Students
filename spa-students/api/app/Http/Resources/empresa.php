<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class empresa extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return 
        [
            'nombre'=> $this->nombre,
            'domicilio'=> $this->domicilio,
            'telefono'=> $this->telefono,
            'puesto'=> $this->puesto,
            'departamento'=> $this->departamento,
        ];
    }
}
