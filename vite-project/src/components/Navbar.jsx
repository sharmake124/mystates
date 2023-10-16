import React from 'react';

function NavBar({ pokemonList, onPokemonClick, currentPokemonIndex }) {
  return (
    <div className="navbar">
      {pokemonList.map((pokemon, index) => (
        <button
          key={index}
          onClick={() => onPokemonClick(index)}
          
        >
          {pokemon.name}
        </button>
      ))}
      {pokemonList[currentPokemonIndex].name === 'pikachu' && alert("pika pikachu !!!")}
    </div>
  );
}

export default NavBar;
