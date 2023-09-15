import React, { Component, useState } from 'react';
import logo from './pokemon.png';
import Logo from '../components/Logo'
import AgeInput from '../components/AgeInput'
import NameInput from '../components/NameInput'
import GenerateButton from '../components/GenerateButton'
import OutputBox from '../components/OutputBox'
import {pokemonList} from './pokemon-list'
import './App.css';

// class App extends Component {
//   constructor() {
//     super()
//   }

//   render() {
//     return (
//     <div className="App">
//       <h1> Find out which pokémon you would be </h1>
//       <Logo logo={logo}/>
//       <NameInput />
//       <AgeInput />
//       <GenerateButton handleClick=/>
//     </div>
//   );
//   }

// }

const App = () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleClick = (event) => {
    if (age === 0){
      alert("Please enter your age");
      return;
    }
    if (name === ""){
      alert("Please enter your name");
      return;
    }
    const pokemon = getPokemon().toLowerCase();
    const json = getJson(pokemon)

    setOutputText(pokemon)
    json.then( (value) => {
      const outputString = `Your pokemon is ${pokemon}\n`
                           + `Your main ability is ${JSON.stringify(value?.abilities[0]?.ability?.name)}\n`
                           + `Your main move is ${JSON.stringify(value?.moves[0]?.move?.name)}\n`
      setOutputText(outputString)
    })
  }

  const getJson = async (pokemon) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await res.json();
    // const out = await res.then(out => alert(out))
    return data

  }

  const getPokemon = () => {
    const hashValue = hashInput(name, age);
    return pokemonList[hashValue]
  }

  const hashInput = (name, age) => {
    let sum = 0;

    for (let letter of name) {
      sum += letter.charCodeAt(0);
    }

    for (let digit of age.toString()){
      sum += digit.charCodeAt(0);
    }
    return sum % (pokemonList.length)

  }

  const handleAgeInputChange = (event) => {
    setAge(event.target.value);
  }

  const handleNameInputChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div className="App">
      <h1> Find out which pokémon you would be </h1>
      <Logo logo={logo}/>
      <NameInput change={handleNameInputChange}/>
      <AgeInput change={handleAgeInputChange}/>
      <GenerateButton handleClick={handleClick}/>
      <OutputBox output={outputText}/>
    </div>
  );
}


export default App;
