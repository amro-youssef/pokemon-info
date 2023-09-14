import logo from './pokemon.png';
import Logo from '../components/Logo'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Pokemon-info </h1>
      <Logo logo={logo}/>
    </div>
  );
}

export default App;
