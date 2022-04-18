import React from "react";
import Cargo from "./cargo";
import ResumoCv from "./ResumoCv";
import DescCargo from './DescCargo';

class FormProf extends React.Component{
  constructor(){
    super();
    this.state = {
      resumocv: '',
      cargo: '',
      descCargo: '',
    };
  }

  onChangeHandler = ({target}) => {
     this.setState({
      [target.name]: target.value,
    });
  }


  render(){
    const {resumocv, cargo, descCargo} = this.state
    return(
      <div>
        <h1>Dados profissionais</h1>
        <ResumoCv value={resumocv} onChangeHandler={this.onChangeHandler} />
        <Cargo value={cargo} onChangeHandler={this.onChangeHandler} />
        <DescCargo value={descCargo} onChangeHandler={this.onChangeHandler} />

      </div>
    )
  }
}

export default FormProf