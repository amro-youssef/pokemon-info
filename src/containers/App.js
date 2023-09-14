import React, {Component} from 'react';
import logo from './pokemon.png';
import Logo from '../components/Logo'
import AgeInput from '../components/AgeInput'
import NameInput from '../components/NameInput'
import GenerateButton from '../components/GenerateButton'
import './App.css';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
    <div className="App">
      <h1> Find out which pokémon you would be </h1>
      <Logo logo={logo}/>
      <NameInput />
      <AgeInput />
      <GenerateButton />
    </div>
  );
  }

}


export default App;
