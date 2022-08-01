import "./App.css";
import About from "./components/About";
import Information from "./components/Information";

function App() {
  return (
    <div>
      <div className="card-container">
        <Information />
        <About />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
