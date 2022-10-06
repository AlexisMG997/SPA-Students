import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/admin/adminPanel";
import Main from "./layouts/main";

/**
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<AdminPanel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
 */

function App() {
  return (
    <Main></Main>
  );
}

export default App;
