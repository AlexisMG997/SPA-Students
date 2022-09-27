import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/admin/adminPanel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<AdminPanel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
