// src/components/Navbar.js
import React from 'react';
import CartWidget from './CartWidget';

function Navbar({ brand, categories }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">{brand}</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    {categories.map((category, index) => (
                        <li key={index} className="nav-item">
                            <a className="nav-link" href="#">{category}</a>
                        </li>
                    ))}
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
}

export default Navbar;
