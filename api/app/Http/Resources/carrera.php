<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class carrera extends JsonResource
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
            'id' => $this->idCar,
            'nombre' => $this->nombre,
            'nivel'=> new nivel($this->nivel),
            
        ];
    }
}
