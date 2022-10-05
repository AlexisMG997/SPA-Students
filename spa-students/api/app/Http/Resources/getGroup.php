<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class getGroup extends JsonResource
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
            "status"=> 200,
            "grupo"=>[
                'id' => $this->idGrupo,
                'cuatrimestre' => $this->cuatrimestre,
                'grupo' => $this->grupo,
                'descripcion' =>$this->descripcion,
                'carrera'=> new carrera($this->carrera),
                'especialidad'=> new especialidad($this->especialidad),
                'periodo'=> new periodo($this->periodo),
            ],
            'alumno'=> new alumnoGru($this->alumno),
            "estadisticas"=>[
                "alumnos"=> 29,
                'datosPersonales'=>[
                    "genero"=>[
                        ["descripcion"=>"Masculino", "cantidad"=>22],
                        ["descripcion"=>"Femenino", "cantidad"=>7]

                    ],
                    "estadoCivil"=>[
                        ["descripcion"=>"Soltero(a)", "cantidad"=>28],
                        ["descripcion"=>"Unión Libre", "cantidad"=>1]
                    ],
                    "viveCon"=>[
                        ["descripcion"=>"Ambos Padres", "cantidad"=>19],
                        ["descripcion"=>"Uno de los Padres", "cantidad"=>7],
                        ["descripcion"=>"Solo(a)", "cantidad"=>2],
                        ["descripcion"=>"Otro Familiar", "cantidad"=>1]
                    ],
                    "ingresosFamiliares"=>[
                        ["descripcion"=>"$5,000 A $10,000", "cantidad"=>18],
                        ["descripcion"=>"$10,000 A $15,000", "cantidad"=>7],
                        ["descripcion"=>"Menos de $5,000", "cantidad"=>2],
                        ["descripcion"=>"Más de $15,000", "cantidad"=>2]
                    ],
                ],
                'datosLaborales'=>[
                    "trabajan"=>[
                        "si"=> 9,
                        "no"=> 20
                    ],
                    "trabajoRelacionadoEstudios"=>[
                        "si"=> 5,
                        "no"=> 4
                    ],
                    "razonTrabaja"=>[
                        ["descripcion"=>"Apoyar Económicamente a la Familia",
                        "cantidad"=> 4],
                        ["descripcion"=>"Solventar Algunos Gastos Personales",
                        "cantidad"=> 3],
                        ["descripcion"=>"Apoyar Totalmente a la Familia",
                        "cantidad"=> 1],
                        ["descripcion"=>"Sostenerme Totalmente",
                        "cantidad"=> 1],
                    ]
                ],
                "datosEscolares"=>[
                    "tipoBachillerato"=>[
                        ["descripcion"=>"Escuela Pública (Oficial de Gobierno)",
                        "cantidad"=> 4],
                        ["descripcion"=>"Privada o Particular"]
                    ],
                    "bachilleratos"=>[
                        ["descripcion"=>"Cecyte Rio",
                        "cantidad"=> 6],
                        ["descripcion"=>"CBTIs 116",
                        "cantidad"=> 5],
                        ["descripcion"=>"Conalep II",
                        "cantidad"=> 4],
                        ["descripcion"=>"CBTIs 58",
                        "cantidad"=> 4],
                        ["descripcion"=>"Cecyte Villa del Sol",
                        "cantidad"=> 3],
                        ["descripcion"=>"Cobach Plantel El Florido",
                        "cantidad"=> 3],
                        ["descripcion"=>"CBTIs 237",
                        "cantidad"=> 2],
                        ["descripcion"=>"Cecyte Altiplano",
                        "cantidad"=> 2],
                        ["descripcion"=>"Conalep Tijuana I",
                        "cantidad"=> 2],
                        ["descripcion"=>"UNEA",
                        "cantidad"=> 2],
                    ],
                    "razonTrabaja"=>[
                        ["descripcion"=>"Apoyar Económicamente a la Familia",
                        "cantidad"=> 4],
                        ["descripcion"=>"Solventar Algunos Gastos Personales",
                        "cantidad"=> 3],
                        ["descripcion"=>"Apoyar Totalmente a la Familia",
                        "cantidad"=> 1],
                        ["descripcion"=>"Sostenerme Totalmente",
                        "cantidad"=> 1],
                    ],
                ],
                "promedios"=>[
                    "bachillerato"=> 8.4,
                    "tsu"=>[
                     "porCuatrimestre"=> [ 8.9, 9.0, 8.7, 8.6, 9.1, 9.2 ],
                     "promedio"=> 9.0
                    ],
                    "ingenieria"=>[
                     "porCuatrimestre"=> [ 9.3, 8.9 ],
                     "promedio"=> 9.1
                    ]
                 ]
            ]
            
        
        ];
    }
}
