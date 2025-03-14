import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef, useEffect } from "react";
import Opening from "./pages/Opening";
import Cake2 from "./pages/Cake2";
import Login from "./pages/Login";
import audio from "../src/assets/romantic-piano-295976.mp3";

function App() {
  const audioRef = useRef(new Audio(audio));

  useEffect(() => {
    // Set the audio to loop
    audioRef.current.loop = true;
    // Play audio when the component mounts
    audioRef.current.play();
  }, []);

  const handlePlayAudio = () => {
    audioRef.current.play();
  };
  return (
    <Router>
      <div style={{ position: "fixed", top: 10, left: 10 }}>
        <button onClick={handlePlayAudio}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#000000]">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
            />
          </svg>
        </button>
      </div>
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
