import React from "react";
import Form from "./Dados Cadastrais/form";
import FormProf from "./Dados Profissionais/formProf";
import ButtonSelect from './Dados Profissionais/buttonSelect'
import ButtonClear from './Dados Profissionais/buttonClear'

class App extends React.Component{
  render(){
    return(
      <div>
        <fieldset>
          <Form />
        </fieldset>  
        <fieldset>
          <FormProf />
        </fieldset>  
        <ButtonSelect />
        <ButtonClear />
     </div>
    )
  }
 }

export default App;
