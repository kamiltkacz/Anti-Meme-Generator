import "./App.css";
import Header from "./Header.js";
import MemeGenerator from "./MemeGenerator.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MemeGenerator />
      </header>
    </div>
  );
}

export default App;
