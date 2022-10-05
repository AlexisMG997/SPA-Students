import React from 'react'
import axios from "axios";
import { groupData } from '../../groupData'



console.log(groupData.map((data) => data.estadisticas.alumnos))
const totalStudent = groupData.map((data) => data.estadisticas.alumnos)
const groupConcat = groupData.map((data) => data.grupo.cuatrimestre) + "'" +
groupData.map((data) => data.grupo.grupo)

function StudentCount() {

  return (
    <div className='box-border h-fit w-128 p-4 border-4'>

        <div className='text-lg font-normal text-center'>Estudiantes en el grupo {groupConcat}</div>

        <div className='text-2xl text-center mt-3'>{totalStudent}</div>
    
    </div>
    
  )
}

export default StudentCount