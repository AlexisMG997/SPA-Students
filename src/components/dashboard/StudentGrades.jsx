import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { studentData } from '../../studentData'

function StudentGrades() {
  return (
    
    <div className='overflow-y-auto box-border h-90  w-62 p-4 border-4'>

      <div className='text-lg font-normal mb-5'>Lista de estudiantes</div>

      <TableContainer component={Paper} sx={{ minHeight: 100, maxHeight: 420}}>
        <Table  size="small">
          <TableHead>
            <TableRow>
              <TableCell >Matricula</TableCell>
              <TableCell >Nombre</TableCell>
              <TableCell >Nivel de inglés</TableCell>
              <TableCell >Promedion TSU</TableCell>
              <TableCell >Promedio ING</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData.map((row) => (
              <TableRow
                key={row.status}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.alumno.matricula}
                </TableCell>
                <TableCell >{row.alumno.nombreCompleto}</TableCell>
                <TableCell >{row.alumno.promedios.tsu.nivelIngles}</TableCell>
                <TableCell >{row.alumno.promedios.tsu.promedio}</TableCell>
                <TableCell >{row.alumno.promedios.ingenieria.promedio}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default StudentGrades