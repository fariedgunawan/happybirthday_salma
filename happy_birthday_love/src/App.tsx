import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Opening from "./pages/Opening";
import Cake from "./pages/Cake";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/alma" element={<Cake />} />
      </Routes>
    </Router>
  );
}

export default App;
