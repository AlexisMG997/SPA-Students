<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class datosFamiliares extends JsonResource
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
            'padre'=> new padre($this->padre),
            'madre'=> new madre($this->madre),
            'conyuge'=> new conyuge($this->conyuge),
            'emergencia'=> new emergencia($this->emergencia),
        ];
    }
}
