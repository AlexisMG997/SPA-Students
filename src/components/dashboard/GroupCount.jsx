import React from 'react'
import { Component } from "react";


export default class StudentCount extends Component {
  
  state = {
    group: [],
    stadistics: []
  }
  
  async componentDidMount(){
    const url = 'http://127.0.0.1:8000/api/grupo'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({group: data.data[0].grupo})
    this.setState({stadistics: data.data[0].estadisticas})
  }

  render(){
    return (
      <div className='box-border h-fit w-128 p-4 border-4 bg-gray-50'>

          <div className='text-lg font-normal text-center'>
            Estudiantes en el grupo 
            {' ' + this.state.group.cuatrimestre + '*' + this.state.group.grupo}
          </div>

          <div className='text-2xl text-center mt-3'>
            { this.state.stadistics.alumnos }
          </div>
      
      </div>
      
    )
  }
}