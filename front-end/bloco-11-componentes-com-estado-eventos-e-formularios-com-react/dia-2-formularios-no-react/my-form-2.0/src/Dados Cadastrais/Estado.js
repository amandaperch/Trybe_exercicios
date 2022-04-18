import React from "react";

class Estado extends React.Component{
  render(){
    const estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia",	"Ceara","Distrito Federal","Espírito Santo", "Goiás","Maranhão",
    "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba",	"Paraná", "Pernambuco",	"Piauí", "Rio de Janeiro",
    "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe","Tocantins"]
    const {estado, onChangeHandler} = this.props;
    return(
      <div>
        <p>Estado</p>
          <select
          type="text" 
          name="estado" 
          required
          onChange={onChangeHandler} 
          value={estado} 
          >
            <option value="">Selecione seu estado</option>
            {
              estados.map((value, key) =>(
                <option key={key}>{value}</option>
              ))
            }         
          </select>
      </div>
    )
  }
 }

export default Estado;