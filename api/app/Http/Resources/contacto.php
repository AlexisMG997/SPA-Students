<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class contacto extends JsonResource
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
            'correoElectronico'=> new correoElectronico($this->correoElectronico),
            'telefono'=> new telefono($this->telefono),
        ];
    }
}
