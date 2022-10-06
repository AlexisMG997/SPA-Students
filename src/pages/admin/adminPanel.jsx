import StudentEngCount from "../../components/dashboard/StudentEngCount";
import StudentGrades from "../../components/dashboard/StudentGrades";
import StudentCount from "../../components/dashboard/GroupCount";
import StudentGenreCount from "../../components/dashboard/StudentGenreCount";


const AdminPanel = () => {

  return (
    <div className="home bg-gray-200">
      <div className="md:flex  justify-center">
        <div className="flex-col mr-10 md:mr-0">
          <div className="md:my-5 md:ml-0 ml-16 mt-5">
            <StudentCount/>
          </div>
          
            <div className="flex ml-16 mt-4 md:ml-0 md:mt-0">
              <StudentEngCount />

              <div className="ml-10 md:ml-0">
                <StudentGenreCount/>
              </div>
              
            </div> 
          </div>
        
          

            <StudentGrades/>
            

      </div>
    </div>
  );
};

export default AdminPanel;
