// src/components/ItemListContainer.js
import React from 'react';

function ItemListContainer({ greeting }) {
    return (
        <div className="container mt-4">
            <h1>{greeting}</h1>
            {/* Aquí puedes agregar el listado de productos o cualquier otro contenido */}
        </div>
    );
}

export default ItemListContainer;
