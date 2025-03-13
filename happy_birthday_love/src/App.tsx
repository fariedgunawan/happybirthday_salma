import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Opening from "./pages/Opening";
import Cake2 from "./pages/Cake2";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/read" element={<Opening />} />
        <Route path="/alma" element={<Cake2 />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
