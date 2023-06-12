import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">   
    <div className="footer-links">
      <a href="#">Sobre</a>
      <a href="#">Publicidade</a>
      <a href="#">Negócios</a>
      <a href="#">Como funciona a pesquisa</a>
    </div>
    <div className="footer-links">
    <a href="#">Privacidade</a>
    <a href="#">Termos</a>
    <a href="#">Configurações</a>
    </div>
    </footer>
  );
}

export default Footer