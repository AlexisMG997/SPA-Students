import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { Component } from "react";

export default class StudentGenreCount extends Component {

  state = {
    root: []
  }
  
  async componentDidMount(){
    const url = 'http://127.0.0.1:8000/api/alumno/'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({root: data.data})
  }

  render(){

    const colors = ['#99549f', '#1290af',"#808080"];
    var men = 0, woman = 0, others = 0

    const contain = this.state.root.map(item => {
      switch (item.datosPersonales.genero.nombre) {
        case 'Masculino': men++ 
          break;
        case 'Femenino': woman++
          break;          
        default: others++
          break;
      }
      
      return [
        {'name' : 'Hombre', 'value' : men},
        {'name' : 'Mujer', 'value' : woman},
        {'name' : 'Otros', 'value' : others}
      ]
    })

    const tail = (contain.length) - 1

    return (
      <div className="box-content h-70 w-64 p-4 border-4 bg-gray-50">

        <div className='text-lg font-normal text-center'>Sexo de los estudiantes</div>

          <PieChart width={400} height={300} margin={{ top: 0, right: 135, left: 0, bottom: 0 }}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={contain[tail]}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {
              contain.map((entry, index) => <Cell fill={colors[index % colors.length]}/>)
            }
              </Pie>
            <Legend verticalAlign="bottom" height={36}/>
            <Tooltip />
          </PieChart>

      </div>
    );
  };
}
