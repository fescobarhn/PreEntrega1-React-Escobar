import React from 'react';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <div>
      <Link to={`/item/${item.id}`}>
        <h2>{item.name}</h2>
      </Link>
      {/* Otros detalles del ítem */}
    </div>
  );
}

export default Item;
