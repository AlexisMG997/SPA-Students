import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Component } from "react";

export default class StudentGrades extends Component {

  state = {
    root: []
  }
  
  async componentDidMount(){
    const url = 'http://127.0.0.1:8000/api/alumno/'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({root: data.data})
  }
  render () {

    const contain = this.state.root.map(item => {
      const container = {};
      var status = 0;

      container.status = status++;
      container.matricula = item.matricula;
      container.nombre = item.nombreCompleto;
      container.ingles = item.promedios.tsu.nivelIngles;
      container.promTSU = item.promedios.tsu.promedio;
      container.promING = item.promedios.ingenieria.promedio;
    
      return container;
    })

  return (
    
    <div className='overflow-y-auto box-border h-90  w-62 p-4 border-4 bg-gray-50 hidden md:block'>

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
            {contain.map((row) => (
              <TableRow
                key={row.status}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.matricula}
                </TableCell>
                <TableCell >{row.nombre}</TableCell>
                <TableCell >{row.ingles}</TableCell>
                <TableCell >{row.promTSU}</TableCell>
                <TableCell >{row.promING}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
}