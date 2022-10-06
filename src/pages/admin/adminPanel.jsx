import Header from "../../components/header/header";
import DataGroup from "../../components/dataGroup/dataGroup";
import Thumbnail from "../../components/thumbnail/thumbnail";
import StudentEngCount from "../../components/dashboard/StudentEngCount";
import StudentGrades from "../../components/dashboard/StudentGrades";
import StudentCount from "../../components/dashboard/GroupCount";

import "./adminPanel.scss";

const AdminPanel = () => {


  return (
    <div className="home">
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
