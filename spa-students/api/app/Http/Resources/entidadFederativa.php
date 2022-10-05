<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class entidadFederativa extends JsonResource
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
            'id' => $this->idEn,
            'nombre'=> $this->nombre,
        ];
    }
}
