<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class tsu extends JsonResource
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
            "bachillerato"=> $this->bachillerato,
            "nivelIngles"=> $this->nivelIngles,
            "puntosExamenIngreso"=> $this->puntosExamenIngreso,
            "porCuatrimestre"=> [ 8.9, 9.2, 8.7, 8.9, 9.1, 9.3 ],
            "promedio"=> $this->promedio,
        ];
    }
}
