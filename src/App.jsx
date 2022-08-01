import "./App.css";
import Information from "./components/Information";

function App() {
  return (
    <div>
      <div className="card-container">
        <Information />
        <div className="card">
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
