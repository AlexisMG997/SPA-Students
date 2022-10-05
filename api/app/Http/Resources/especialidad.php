<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class especialidad extends JsonResource
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
            'id' => $this->idEsp,
            'nombre' => $this->nombre
        ];
    }
}
