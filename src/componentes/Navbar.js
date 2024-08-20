import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


export const Navbar = ({ setView, cantidadCarrito, cantidadVentas, loggedUser, setBusqueda}) => {
    const navigate = useNavigate();

    const generarProductos = () => {
        console.log("Generar productos");
        setView('productos');  
    };

    const handleSearch = (e) => {//buscador
        e.preventDefault();
        const searchTerm = document.getElementById('idBuscar').value.trim();
        if (searchTerm) {
            setBusqueda(searchTerm);
            setView('busqueda'); 
        } else {
            setBusqueda(''); 
        }
    };

    const irCarrito = () => {
        console.log("Ir al carrito");
        setView('carrito');
    };

    const irVentas = () => {
        console.log("Ir a ventas");
        setView('ventas');
    };

    const handleLogout = () => {   //salir
        localStorage.setItem('isAuthenticated','false');
        localStorage.removeItem('loggedUser');
        console.log("Cerrar sesión false");
        navigate('/login');
        localStorage.clear();
        
    };

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-brand" onClick={generarProductos}>Home</button>
                    <form className="d-flex" role="search" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="idBuscar"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button type="button" className="btn btn-primary position-relative" onClick={irCarrito}>
                        Ver Carrito
                        {cantidadCarrito > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cantidadCarrito}
                                <span className="visually-hidden">productos</span>
                            </span>
                        )}
                    </button>
                    <button type="button" className="btn btn-primary position-relative" onClick={irVentas}>
                        Ver Ventas
                        {cantidadVentas > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cantidadVentas}
                                <span className="visually-hidden">productos</span>
                            </span>
                        )}
                    </button>
                    <div id="usuario" className="navbar-text">
                        {loggedUser && `Hola, ${loggedUser}`}
                    </div>
                    <button className="btn btn-primary position-relative" onClick={handleLogout}>Salir</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

