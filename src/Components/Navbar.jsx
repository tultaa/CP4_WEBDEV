import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Navbar() {

  
  return (
    <>
    <nav>
      <Link className="homenav" to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/contato">Contato</Link>
    </nav>
    </>
  );
}

export default Navbar;