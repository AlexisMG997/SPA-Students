import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { studentData } from "../../studentData";

      const colors = ['#eb7a0f', '#026aa8', '#99549f', '#1290af',"#E44C50","#de171a","#808080"];
      var a1 = 0, a2 = 0, b1= 0, b2 = 0, c1 = 0, c2 = 0, unclass = 0
      var engLvl = studentData.map(function(data) {

        switch (data.alumno.promedios.tsu.nivelIngles) {
          case 'A1':
            a1++
            break;

          case 'A2':
            a2++
            break;          
            
          case 'B1':
            b1++
            break;

          case 'B2':
            b2++
            break;          
            
          case 'C1':
            c1++
            break;

          case 'C2':
            c2++
            break;
        
        
          default:
            unclass++
            break;
        }
        return [
          {'name' : 'A1', 'value' : a1},
          {'name' : 'A2', 'value' : a2},
          {'name' : 'B1', 'value' : b1},
          {'name' : 'B2', 'value' : b2},
          {'name' : 'C1', 'value' : c1},
          {'name' : 'C2', 'value' : c2},
          {'name' : 'Sin nivel', 'value' : unclass}
        ]
      })

    console.log(engLvl)
     const last = engLvl.length
     console.log(engLvl[last-1])

const StudentEngCount = () => {

  return (
    <div className="box-content h-70 w-64 p-4 border-4">

      <div className='text-lg font-normal text-center'>Nivel de inglés de los estudiantes</div>

        <PieChart width={400} height={300} margin={{ top: 0, right: 135, left: 0, bottom: 0 }}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={engLvl[last-1]}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {
          	engLvl[last-1].map((entry, index) => <Cell fill={colors[index % colors.length]}/>)
          }
            </Pie>
          <Legend verticalAlign="bottom" height={36}/>
          <Tooltip />
        </PieChart>

    </div>
  );
};
export default StudentEngCount;
