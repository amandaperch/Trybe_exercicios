import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      index: 0,
      type: 'Fire'
    };
    this.nextPokemon = this.nextPokemon.bind(this);
  };

  filterPokemon = ({target}) =>{
    this.setState({ type: target.innerText })
  };

  byType = (pokemon) =>{
    const { type } = this.state;
    return pokemon.type === type;
  };

  nextPokemon(){
    const { pokemons } = this.props;
    const pokemonsFiltered = pokemons.filter(this.byType);
    this.setState((estadoAnterior, _props) => {
      if (estadoAnterior.index === pokemonsFiltered.length - 1){
        return { index: 0 }
      }
      return{
        index: estadoAnterior.index + 1,
      }
    });
  }

  render(){
    const { pokemons } = this.props;
    const { index } = this.state;
    return(
      <div>
        {<Pokemon pokemon={pokemons.filter(this.byType)[index]} />}
        <button onClick={this.nextPokemon}>
          Próximo Pokemon
        </button>
        <br/>
        <button onClick={this.filterPokemon}>
          Fire
        </button>
        <button onClick={this.filterPokemon}>
          Psychic
        </button>
        <button onClick={this.filterPokemon}>
          Electric
        </button>
        <button onClick={this.filterPokemon}>
          Bug
        </button>
        <button onClick={this.filterPokemon}>
          Poison
        </button>
        <button onClick={this.filterPokemon}>
          Normal
        </button>
        <button onClick={this.filterPokemon}>
          Dragon
        </button>        
      </div>
    );
  }
  };

export default Pokedex;