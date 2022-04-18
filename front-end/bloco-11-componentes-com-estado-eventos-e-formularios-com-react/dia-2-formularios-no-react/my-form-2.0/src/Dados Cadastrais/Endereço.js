import React from "react";

class Endereco extends React.Component{
  render(){
    const {endereco, onChangeHandler} = this.props;
    return(
      <div>
        <p>Endereço:</p>
          <input 
          type="text" 
          name="endereco" 
          required
          maxLength="200"
          onChange={onChangeHandler} 
          value={endereco} >
          </input>
      </div>
    )
  }
 }

export default Endereco;