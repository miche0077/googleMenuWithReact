import React from "react";
import PropTypes from "prop-types";
import '../styles/buttons.css';

function Buttons({ prop1, prop2}){
    return(
        <React.Fragment>
            <button type="submit" className="btn-search" >{prop1}</button>
            <button type="submit" className="btn-search" >{prop2}</button>
        </React.Fragment>
         
    )
}
Buttons.propTypes = {
    prop1: PropTypes.string.isRequired,
    prop2: PropTypes.string.isRequired,
  }
export default Buttons