import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    const brand = "Mi Tienda";
    const categories = ["Categoría 1", "Categoría 2", "Categoría 3"];
    return (
        <div className="App">
            <Navbar brand={brand} categories={categories} />
            <ItemListContainer greeting="Bienvenido a nuestra tienda!" />
        </div>
    );
}

export default App;

