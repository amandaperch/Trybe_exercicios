import React from "react";

class ButtonClear extends React.Component{
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumocv: '',
      cargo: '',
      descCargo: '',
    }
  }

    INITIAL_STATE = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumocv: '',
      cargo: '',
      descCargo: '',
  }

  resetForm = (INITIAL_STATE) => { this.setState(INITIAL_STATE) };

  render(){
    return(
      <div>
        <input
          type="reset"
          onClick={ this.resetForm }
          value="Limpar"
        />
      </div>
    )
  }
}

export default ButtonClear