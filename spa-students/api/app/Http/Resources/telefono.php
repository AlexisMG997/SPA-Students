<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class telefono extends JsonResource
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
            'casa' => $this->casa,
            'movil'=> $this->movil
        ];
    }
}
