import React from "react";

class DescCargo extends React.Component{
  render(){
    const {descCargo, onChangeHandler,} = this.props;
    return(
      <div>
        <p>Descrição do cargo:</p>
          <input 
          type="text" 
          name="descCargo" 
          required
          maxLength="500"
          onChange={onChangeHandler} 
          value={descCargo} >
          </input>
      </div>
    )
  }
 }

export default DescCargo;