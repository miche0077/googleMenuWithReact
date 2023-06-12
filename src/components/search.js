import React from "react";
import "../styles/search.css";
import Lup from "../images/lup.png";
import googleLogo from "../images/logo-google.png";


function Search() {
  return (
    <div className="pesquisa">
      <img className="logo-google" src={googleLogo} alt="Google logo" />
      <div className="input-wrapper">
        <img className="icon-lup" src={Lup} alt="icone-glass" />
        <input
          className="input-pesquisa"
          type="text"
          placeholder="Buscar en Google"
        />
      </div>
      
      
    </div>
  );
}
export default Search;
