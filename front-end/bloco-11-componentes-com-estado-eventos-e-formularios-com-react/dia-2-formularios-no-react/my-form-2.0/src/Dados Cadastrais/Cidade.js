import React from "react";

class Cidade extends React.Component{
  render(){
    const {cidade, onChangeHandler, myFunction} = this.props;
    return(
      <div>
        <p>Cidade:</p>
          <input 
          type="text" 
          name="Cidade" 
          required
          maxLength="28"
          onChange={onChangeHandler} 
          onblur={myFunction}
          value={cidade} >
          </input>
      </div>
    )
  }
 }

export default Cidade;