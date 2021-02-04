
import './App.css';
import Header from './Header.js';
import MemeGenerator from './MemeGenerator';
import Logo from './haroldsmile.jpg';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Header />
        <MemeGenerator />
      </header>
      <Logo />
    </div>
  );
}

export default App;
