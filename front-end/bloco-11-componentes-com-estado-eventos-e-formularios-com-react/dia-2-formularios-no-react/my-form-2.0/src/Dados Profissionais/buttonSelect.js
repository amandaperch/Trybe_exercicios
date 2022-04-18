import React from "react";

class ButtonSelect extends React.Component{
  clear = () =>{
    const {name, email, cpf, endereco, cidade, estado, tipo, resumocv, cargo, descCargo } = this.state
    const errorCases = [name.length !== 0, email.length !== 0, cpf.length !== 0, endereco.length !== 0, cidade.length !== 0,
    estado.length !== 0, tipo.length !== 0, resumocv.length !== 0, cargo.length !== 0, descCargo.length !== 0,] 
   
    const isDisabled = errorCases.every((err) => err === true)

    this.setState({
      disabled: !isDisabled,
    })

  }
  render(){
   return(
      <div>
        <button 
          type="button"
            onClick={ this.clear }
            value="Enviar">
        Enviar</button>
      </div>
    )
  }
}

export default ButtonSelect