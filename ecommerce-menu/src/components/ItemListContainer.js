import React, { useEffect, useState } from "react";
import { fetchItemsByCategory } from "api.js";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const category = props.category;

    fetchItemsByCategory(category)
      .then(data => setItems(data))
      .catch(error => console.error(error));
  }, [props.category]);

  return (
    <div className="itemsList">
      {items.map(item => (
        <div key={item.id} className="item">
          <img src={item.imageURL} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <strong>${item.price}</strong>
          <button>Agregar al Carrito</button>
          <a href={`/product/${item.id}`}>Ver detalles</a>
        </div>
      ))}
    </div>
  );
  
}

export default ItemListContainer;
