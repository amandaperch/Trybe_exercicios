import React from 'react';
import NamePok from './namePok';
import TipePok from './tipePok';
import PesoUnPoke from './pesoUnPoke';
import ImgPok from './imgPok';
import './App.css'
import './data';

class App extends React.Component {
  render() {
    return (
      <div>
      <h1> Pokedex</h1>
       <NamePok />
       <TipePok />
       <PesoUnPoke />
       <ImgPok />
      </div>
    );
  }
}

export default App;
