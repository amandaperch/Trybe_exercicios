import React from "react";
import PropTypes from 'prop-types'

class Pokemon extends React.Component{
  render(){
     const {image, name, type, moreInfo, averageWeight} = this.props.pokemon
     const {value, measurementUnit} = averageWeight
      return(
      <div >
        <a href={moreInfo} target='_blank' rel="noreferrer">
        <h2>{ name }</h2>
        </a>
        <h3>{ type }</h3>
        <h3>{`AverageWeight: ${value} ${measurementUnit}`} </h3>
        <img src={image} alt={`${name} sprite`}></img>
      </div>
    );
  }
};

Pokemon.proptype = {
  pokemon: PropTypes.shape({
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
    averageWeight: PropTypes.shape({
      value: PropTypes.string.isRequired,
      measurementUnit: PropTypes.number.isRequired,
    })
  })
  }

export default Pokemon;