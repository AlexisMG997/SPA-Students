<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ingenieria extends JsonResource
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
            "porCuatrimestre"=> [ 9.4, 8.8 ],
            "promedio"=> $this->promedio,
        ];
    }
}
