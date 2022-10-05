<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class datosEconomicos extends JsonResource
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
            "viveCon"=> new viveCon($this->Vivecon),
            "vivienda"=> new vivienda($this->vivienda),
            "transporte"=> new transporte($this->transporte),
            "apoyoEconomico"=> new apoyoEconomico($this->apoyoEconomico),
            "ingresosFamiliares"=> new ingresosFamiliares($this->ingresosFamiliares),
        ];
    }
}
