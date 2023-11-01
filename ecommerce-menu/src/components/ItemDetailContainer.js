import React, { useEffect, useState } from "react";
import { fetchItemDetail } from "api.js";

const ItemDetailContainer = (props) => {
  const [itemDetail, setItemDetail] = useState(null);

  useEffect(() => {
    // Asumiendo que el ID del item viene desde las props
    const itemId = props.itemId;

    fetchItemDetail(itemId)
      .then(data => setItemDetail(data))
      .catch(error => console.error(error));
  }, [props.itemId]);

  return (
    <div className="itemDetail">
      {itemDetail ? (
        <>
          <img src={itemDetail.imageURL} alt={itemDetail.name} />
          <h2>{itemDetail.name}</h2>
          <p>{itemDetail.description}</p>
          <strong>${itemDetail.price}</strong>
          <button>Agregar al Carrito</button>
          <p>Reseñas: {itemDetail.reviewsCount} - Valoración: {itemDetail.rating} estrellas</p>
          <a href="/items">Regresar a la lista de productos</a>
        </>
      ) : (
        <p>Cargando detalle del producto...</p>
      )}
    </div>
  );
  
}

export default ItemDetailContainer;
