<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class conyuge extends JsonResource
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
            'ocupación'=> $this->ocupacion,
            'teléfono'=> $this->telefono,
        ];
    }
}
