import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
const ListaTarefas = ['Acordar', 'Ir a academia', 'Arrumar a casa ', 'Estudar']

class App extends React.Component {
  render() {
    return (
      <ul>{ ListaTarefas.map(ListaTarefas => Task(ListaTarefas)) }</ul>
    );
  }
}

export default App;
