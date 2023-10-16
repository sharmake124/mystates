import { useState } from 'react'
import { useEffect } from 'react';
import Pokemondcard from './components/PokemondCard'
import NavBar from './components/Navbar';
import './App.css'




const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []); // Utilisation de useEffect pour afficher une alerte au démarrage

  const handlePokemonClick = (index) => {
    setPokemonIndex(index);
  };

  return (
    <div >
      <h1>{pokemonList[pokemonIndex].name}</h1>
      <Pokemondcard name={pokemonList[pokemonIndex].name} image={pokemonList[pokemonIndex].imgSrc} />
      <NavBar
        pokemonList={pokemonList}
        onPokemonClick={handlePokemonClick}
        currentPokemonIndex={pokemonIndex}
      />
    </div>
  );
}

export default App;



