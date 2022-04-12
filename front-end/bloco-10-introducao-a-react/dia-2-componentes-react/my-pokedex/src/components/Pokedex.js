import React from "react";
import Pokemon from "./Pokemon";

const renderPokemom = (pokemon) => (
  <Pokemon key={pokemon.id} pokemon={pokemon} />
)

class Pokedex extends React.Component{
  render(){
    const { pokemons } = this.props;
    return(
      <div>
        {
        pokemons.map(renderPokemom)
        }
      </div>
    );
  }
  };

export default Pokedex;