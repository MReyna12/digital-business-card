import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Information from "./components/Information";

function App() {
  return (
    <div>
      <div className="card-container">
        <Information />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
