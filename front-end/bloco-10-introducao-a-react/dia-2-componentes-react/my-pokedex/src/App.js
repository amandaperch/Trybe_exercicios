import React from 'react';
import Pokedex from './components/Pokedex';
import data from './data';

class App extends React.Component {
  render(){
    return(
        <div>
          <Pokedex pokemons={data}/>
        </div>
    )
  }
}

export default App;