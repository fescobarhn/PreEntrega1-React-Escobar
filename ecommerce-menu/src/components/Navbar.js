// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">BrandName</Link>
      <ul>
        <li><Link to="/category/vehículos">Vehículos</Link></li>
        {/* Agregar más categorías según lo necesario */}
      </ul>
      {/* Aquí podrías agregar el ícono o componente del carrito */}
    </nav>
  );
}

export default Navbar;