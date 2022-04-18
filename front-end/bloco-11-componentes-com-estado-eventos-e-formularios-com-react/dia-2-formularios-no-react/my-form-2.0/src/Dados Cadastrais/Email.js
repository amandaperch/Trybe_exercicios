import React from "react";

class Email extends React.Component{
  render(){
    const {email, onChangeHandler} = this.props;
    return(
      <div>
        <p>Email:</p>
          <input 
          type="text" 
          name="email" 
          required
          maxLength="50"
          onChange={onChangeHandler} 
          value={email} >
          </input>
      </div>
    )
  }
 }

export default Email;
