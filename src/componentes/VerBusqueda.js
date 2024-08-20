import React, { useState, useEffect } from 'react';

export const VerBusqueda = ({ busqueda, setView, setSelectedProductId }) => {
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    useEffect(() => {
        const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
        const filtrados = productosGuardados.filter(p => p.nombreProducto.toLowerCase().includes(busqueda.toLowerCase()));
        setProductosFiltrados(filtrados);
    }, [busqueda]);
    console.log("busco?")
    if (productosFiltrados.length === 0) {
        return <div>No se encontraron productos que coincidan con la búsqueda.</div>;
    }
    return (
        <div className="container">
            <div className="row">
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((producto) => (
                        <div key={producto.idProducto} className="col-md-2 item shadow p-3 mb-5 bg-body-tertiary rounded d-flex justify-content-center">
                            <div className="card producto-card w-100">
                                <img src={`./img/${producto.fotoProducto}`} className="card-img-top" alt={producto.nombreProducto} />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombreProducto}</h5>
                                    <p className="card-text">ID: {producto.idProducto}</p>
                                    <p className="card-text">Stock: {producto.stockProducto}</p>
                                    <p className="card-text">Precio: ${producto.precioProducto}</p>
                                    <button className="btn btn-primary" onClick={() => {
                                        setSelectedProductId(producto.idProducto);
                                        setView('detalles');
                                    }}>Ver Detalles</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay productos que coincidan con la búsqueda.</p>
                )}
            </div>
        </div>
    );
};

export default VerBusqueda;
