import React from "react";

class Cpf extends React.Component{
  render(){
    const {cpf, onChangeHandler} = this.props;
    return(
      <div>
        <p>CPF:</p>
          <input 
          type="text" 
          name="cpf" 
          required
          maxLength="11"
          onChange={onChangeHandler} 
          value={cpf} >
          </input>
      </div>
    )
  }
 }

export default Cpf;