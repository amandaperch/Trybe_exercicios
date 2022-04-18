import React from "react";

class ResumoCv extends React.Component{
  render(){
    const {resumoCv, onChangeHandler,} = this.props;
    return(
      <div>
        <p>Resumo do currículo:</p>
          <input 
          type="textArea" 
          name="resumocv" 
          required
          maxLength="1000"
          onChange={onChangeHandler} 
          value={resumoCv} >
          </input>
      </div>
    )
  }
 }

export default ResumoCv;