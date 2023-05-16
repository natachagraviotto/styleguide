import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MytopBar from "./components/topbar/Topbar";
import "./App.css";
import "./scss/global.scss";
import Styleguide from "./views/Styleguide/Styleguide";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <MytopBar />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Router>
        <Routes>
          <Route path="/styleguide" element={<Styleguide />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
