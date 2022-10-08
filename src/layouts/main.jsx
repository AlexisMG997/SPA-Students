import Header from "../components/header/header";
import { Routes, Route } from "react-router-dom";
import Student from "../components/student/student";
import Thumbnail from "../components/thumbnail/thumbnail";
import AdminPanel from "../pages/admin/adminPanel";

function Main() {
  return (
    <div>
      <Header />
      <Thumbnail />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<AdminPanel />} />
          <Route path="/student/:user" element={<Student />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
