import React from "react";

class NameInput extends React.Component{
  render(){
    const {name, onChangeHandler} = this.props;
    return(
      <div>
        <p>Nome:</p>
          <input 
          type="text" 
          name="name" 
          required
          maxLength="40"
          onChange={onChangeHandler} 
          value={name} >
          </input>
      </div>
    )
  }
 }

export default NameInput;
