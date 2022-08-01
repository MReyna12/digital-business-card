import { useState } from "react";
import headshot from "../public/reyna-michael.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card-container">
        <div>
          <img
            src={headshot}
            className="headshot react"
            alt="Headshot photograph of Michael Reyna"
          />
        </div>
        <h1>Michael Reyna</h1>
        <h2>Frontend Developer</h2>
        <p></p>
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
      </div>
    </div>
  );
}

export default App;
