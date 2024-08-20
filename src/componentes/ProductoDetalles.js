import React, { useState, useEffect } from 'react';

export const ProductoDetalles = ({ idProducto, setView }) => {
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const productos = JSON.parse(localStorage.getItem('productos')) || [];
        const productoEncontrado = productos.find(p => p.idProducto === idProducto);
        if (productoEncontrado) {
            setProducto(productoEncontrado);
            setTotal(productoEncontrado.precioProducto);
        }
    }, [idProducto]);

    const anadirAlCarrito = (producto, cantidad, total) => {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const productoExistente = carrito.find(item => item.producto.idProducto === producto.idProducto);

        if (productoExistente) {
            productoExistente.cantidadProducto += cantidad;
            productoExistente.totalProducto = productoExistente.cantidadProducto * producto.precioProducto;
        } else {
            const nuevoItem = {
                producto: producto,
                cantidadProducto: cantidad,
                totalProducto: total
            };
            carrito.push(nuevoItem);
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert(`${producto.nombreProducto} ha sido añadido al carrito.`);
        setView('productos');
    };

    const handleCantidadChange = (e) => {
        const nuevaCantidad = parseInt(e.target.value);
        if (nuevaCantidad >= 1 && nuevaCantidad <= producto.stockProducto) {
            setCantidad(nuevaCantidad);
            setTotal(nuevaCantidad * producto.precioProducto);
        }
    };

    if (!producto) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className="container">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`./img/${producto.fotoProducto}`} className="card-img-top" alt={producto.nombreProducto} />   
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombreProducto}</h5>
                            <p className="card-text">ID: {producto.idProducto}</p>
                            <p className="card-text">Stock: {producto.stockProducto}</p>
                            <p className="card-text">Precio: ${producto.precioProducto}</p>
                            <p className="card-text number-container">
                                Cantidad
                                <input 
                                    type="number"
                                    className="form-control card-text"
                                    value={cantidad}
                                    min="1"
                                    max={producto.stockProducto}
                                    onChange={handleCantidadChange}
                                />
                            </p>
                            <p className="number-container cart-text">Total: ${total}</p>
                            <button type="button" className="btn btn-primary position-relative" onClick={() => anadirAlCarrito(producto, cantidad, total)}>
                                Añadir al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductoDetalles;
