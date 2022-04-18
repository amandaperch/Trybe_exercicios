import React from "react";
import NameInput from "./NameInput";
import Email from "./Email";
import Cpf from "./Cpf";
import Endereco from "./Endereço";
import Cidade from "./Cidade";
import Estado from "./Estado";
import Tipo from "./Tipo";

class Form extends React.Component{
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
    };
  }

  onChangeHandler = ({target}) => {
     this.setState({
      [target.name]: target.value,
    });
  }

  myFunction = ({target}) => {
    let {name, value} = target;
    if (name === 'city') value = value.match(/^\d/) ? '' : value;
    this.setState(name, value);
  }

  render(){
    const {name, email, cpf, endereco, cidade, estado, tipo} = this.state
    return(
      <div>
        <h1>Dados pessoais</h1>
        <NameInput value={name} onChangeHandler={this.onChangeHandler} />
        <Email value={email} onChangeHandler={this.onChangeHandler}/>
        <Cpf value={cpf} onChangeHandler={this.onChangeHandler}/>
        <Endereco value={endereco} onChangeHandler={this.onChangeHandler}/>
        <Cidade value={cidade} onChangeHandler={this.onChangeHandler} onblue={this.myFunction}/>
        <Estado value={estado} onChangeHandler={this.onChangeHandler} />
        <Tipo value={tipo} onChangeHandler={this.onChangeHandler} />
      </div>
    )
  }
}

export default Form