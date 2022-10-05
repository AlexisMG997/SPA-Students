import Header from "../components/header/header";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Router,
  Route,
} from "react-router-dom";
import Student from "../components/student/student";
import Dashboard from "../components/dashboard/dashboard";
import Thumbnail from "../components/thumbnail/thumbnail";

function Main() {
  return (
    <div>
      <p>Navbar</p>
      <Header></Header>
      <Thumbnail></Thumbnail>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/student/:username" element={<Student />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
