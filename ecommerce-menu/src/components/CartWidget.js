// src/components/CartWidget.js
import React from 'react';

function CartWidget() {
    return (
        <div>
            <i className="fas fa-shopping-cart"></i>
            <span className="badge badge-pill badge-warning">5</span> {/*Número hardcodeado */}
        </div>
    );
}

export default CartWidget;
