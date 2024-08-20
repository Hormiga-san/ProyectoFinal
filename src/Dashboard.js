import React, { useState, useEffect } from 'react';
import Navbar from './componentes/Navbar';
import { VerProductos } from './componentes/VerProductos';
import { VerCarrito } from './componentes/VerCarrito';
import { VerVentas } from './componentes/VerVentas';
import { ProductoDetalles } from './componentes/ProductoDetalles';
import { VerBusqueda } from './componentes/VerBusqueda';

export const Dashboard = () => {
    const [view, setView] = useState('productos');  // Estado para controlar la vista actual, por defecto 'productos'
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [cantidadCarrito, setCantidadCarrito] = useState(0);
    const [cantidadVentas, setCantidadVentas] = useState(0);
    const [loggedUser, setLoggedUser] = useState('');

    useEffect(() => {
        actualizarProductos();
        actualizarCantidadCarrito();
        actualizarCantidadVentas();
        setLoggedUser(localStorage.getItem('loggedUser') || '');
    }, []);

    useEffect(() => {
        actualizarCantidadCarrito();
        actualizarCantidadVentas();
    }, [view]);

    const actualizarProductos = () => {
        const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
        setProductos(productosGuardados);
    };

    const actualizarCantidadCarrito = () => {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        setCantidadCarrito(carrito.length);
        console.log('Carrito actualizado:', carrito.length);
    };

    const actualizarCantidadVentas = () => {
        const ventas = JSON.parse(localStorage.getItem('ventas')) || [];
        setCantidadVentas(ventas.length);
        console.log('Ventas actualizadas:', ventas.length);
    };
    // muestra siempre los componentes seleccionables en el navbar
    return (
        <div>
            <Navbar setView={setView} cantidadCarrito={cantidadCarrito} cantidadVentas={cantidadVentas} loggedUser={loggedUser} setBusqueda={setBusqueda}/>
            {view === 'productos' && <VerProductos productos={productos} setView={setView} setSelectedProductId={setSelectedProductId} />}
            {view === 'carrito' && <VerCarrito setView={setView} actualizarProductos={actualizarProductos} actualizarCantidadCarrito={actualizarCantidadCarrito} />}
            {view === 'ventas' && <VerVentas actualizarCantidadVentas={actualizarCantidadVentas} />}
            {view === 'detalles' && <ProductoDetalles idProducto={selectedProductId} setView={setView} />}
            {view === 'busqueda' && <VerBusqueda busqueda={busqueda} setView={setView} setSelectedProductId={setSelectedProductId} />}
        </div>
    );
}

export default Dashboard;
