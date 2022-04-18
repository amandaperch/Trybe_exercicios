import React from "react";

class Cargo extends React.Component{
  render(){
    const {cargo, onChangeHandler,} = this.props;
    return(
      <div>
        <p>Cargo:</p>
          <input 
          type="textArea" 
          name="cargo" 
          required
          maxLength="40"
          onChange={onChangeHandler} 
          value={cargo} 
          //onMouseEnter={() =>{
           // alert('Preencha com cuidado esta informação.');
         // }}
          >
        </input>
      </div>
    )
  }
 }

export default Cargo;