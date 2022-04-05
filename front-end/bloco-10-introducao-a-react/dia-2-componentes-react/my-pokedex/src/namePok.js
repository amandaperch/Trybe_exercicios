import React from 'react';
import pokemons from './data'

class NamePok extends React.Component {
  render() {
    return <h1>O nome deste pokemon é: {pokemons.name}</h1>;
  }
}

export default NamePok;