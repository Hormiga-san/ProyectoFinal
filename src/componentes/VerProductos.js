import React, { useEffect, useState } from 'react';

export const VerProductos = ({setView,setSelectedProductId}) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
        setProductos(productosGuardados);
    }, []);
    const mostrarDetalles = (idProducto) => {
        setSelectedProductId(idProducto);
        setView('detalles');
    };
    //se imprimen los productos desde el local storage
    return (
        <div className="container">
            <div className="row">
                {productos.length > 0 ? (
                    productos.map((producto) => (
                        <div key={producto.idProducto} className="col-md-2 item shadow p-3 mb-5 bg-body-tertiary rounded d-flex justify-content-center">
                            <div className="card producto-card card w-100 ">
                                <div style={{height: '200px', overflow: 'hidden'}}>
                                    <img src={`./img/${producto.fotoProducto}`} className="card-img-top" alt={producto.nombreProducto} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombreProducto}</h5>
                                    <p className="card-text">ID: {producto.idProducto}</p>
                                    <p className="card-text">Stock: {producto.stockProducto}</p>
                                    <p className="card-text">Precio: ${producto.precioProducto}</p>
                                    <button className="btn btn-primary position-relative" onClick={() => mostrarDetalles(producto.idProducto)}>Ver Detalles</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles</p>
                )}
            </div>
        </div>
    );
};

export default VerProductos;
