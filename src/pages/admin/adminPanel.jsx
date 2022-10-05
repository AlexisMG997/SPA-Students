import Header from "../../components/header/header";
import DataGroup from "../../components/dataGroup/dataGroup";
import Thumbnail from "../../components/thumbnail/thumbnail";
import StudentEngCount from "../../components/dashboard/StudentEngCount";
import StudentGrades from "../../components/dashboard/StudentGrades";
import StudentCount from "../../components/dashboard/GroupCount";
/*import { groupData } from "../../groupData";
import { studentData } from "../../studentData";
import { useState } from "react";*/
import "./adminPanel.scss";

const AdminPanel = () => {

  /*const student = studentData.map((data) => data.alumno.promedios.ingenieria.promedio)
  console.log(student)

  const [studentsGrades, setStudentsGrades] = useState({
    labels: studentData.map((data) => data.alumno.),
    dataset: [{
      label: "Promedio de los estudiantes (ING)",
      data: studentData.map((data) => data.alumno.promedios.ingenieria.promedio),
      
    }]
  });
  
   chartData={studentsGrades}/>*/

  return (
    <div className="home">
      <Header />
      <DataGroup />
      <Thumbnail />

      <div className="flex">
        <div className="flex-col">
          <StudentCount/>
          <StudentEngCount />
        </div>
        <StudentGrades/>
      </div>
    </div>
  );
};

export default AdminPanel;
