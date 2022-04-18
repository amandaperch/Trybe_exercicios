import React from "react";

class Tipo extends React.Component{
  render(){
    const {tipo, onChangeHandler} = this.props;
    return(
      <div>
        <input 
        type="radio" 
        name="tipo" 
        required
        value={tipo} 
        onChangeHandler={onChangeHandler} 
        /> Casa 
         <input 
        type="radio" 
        name="tipo" 
        required
        value={tipo} 
        onChangeHandler={onChangeHandler} 
        /> Apartamento
      </div>
    )
  }
 }

export default Tipo;