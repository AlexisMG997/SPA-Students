import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/admin/adminPanel";
import Student from "./components/student/student";
import Main from "./layouts/main";

function App() {
  return (
    <Main></Main>
    // <div className="App">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/">
    //         <Route index element={<AdminPanel />} />
    //         <Route path="student" element={<Student />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
