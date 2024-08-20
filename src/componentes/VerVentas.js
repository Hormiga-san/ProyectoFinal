import React, { useEffect, useState } from 'react';
import { Ventas } from '../clases/Ventas'; //para usarlo como clase 

export const VerVentas = ({ actualizarCantidadVentas }) => {
    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        const ventasGuardadas = JSON.parse(localStorage.getItem('ventas')) || [];
        const ventasRecuperadas = ventasGuardadas.map(data => new Ventas(
            data.idProducto,
            data.nombreProducto,
            data.stockProducto,
            data.precioProducto,
            data.fotoProducto,
            data.cantidadProducto,
            data.totalProducto
        ));
        setVentas(ventasRecuperadas);
    }, []);

    const limpiarVentas = () => { //quita las ventas
        localStorage.removeItem('ventas');
        setVentas([]);
        alert('Ventas limpiadas');
        actualizarCantidadVentas();
    };

    return (
        <div className="container">
            {ventas.length > 0 ? (
                <div>
                    {ventas.map((venta, index) => (
                        <div key={index} className="card mb-3" style={{ maxWidth: '540px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={`img/${venta.getfotoProducto()}`} className="card-img-top" alt={venta.getnombreProducto()} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{venta.getnombreProducto()}</h5>
                                        <p className="card-text">ID: {venta.getidProducto()}</p>
                                        <p className="card-text">Cantidad: {venta.getcantidadProducto()}</p>
                                        <p className="card-text">Total: ${venta.gettotalProducto()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button className="btn btn-danger" onClick={limpiarVentas}>Limpiar Ventas</button>
                </div>
            ) : (
                <p>No hay ventas registradas.</p>
            )}
        </div>
    );
};

export default VerVentas;

