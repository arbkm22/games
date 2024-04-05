import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Wordle from './components/Wordle/Wordle.js';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Wordle />
      </div>
    </div>
  );
}

export default App;
