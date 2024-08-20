import React, { useEffect, useState } from 'react';
import { Carrito } from '../clases/Carrito';
import { Ventas } from '../clases/Ventas';
//importo las carrito y ventas para usarlos como clases
export const VerCarrito = ({ setView, actualizarProductos, actualizarCantidadCarrito }) => {
    const [carrito, setCarrito] = useState([]);
    const [totalFinal, setTotalFinal] = useState(0);

    useEffect(() => {
        const productosGuardados = JSON.parse(localStorage.getItem('carrito')) || [];
        const productosRecuperados = productosGuardados.map(data => new Carrito(data.producto, data.cantidadProducto, data.totalProducto));//creo y genero una clase Carrito
        setCarrito(productosRecuperados);
        recalcularTotal(productosRecuperados);
    }, []);

    const recalcularTotal = (productos) => {
        const total = productos.reduce((acc, item) => acc + parseFloat(item.getTotalProducto()), 0);
        setTotalFinal(total);
    };

    const eliminarProductoCarro = (idProducto) => {
        const nuevoCarrito = carrito.filter(item => item.getProducto().idProducto !== idProducto);
        setCarrito(nuevoCarrito);
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito.map(item => ({
            producto: item.getProducto(),
            cantidadProducto: item.getCantidadProducto(),
            totalProducto: item.getTotalProducto()
        }))));
        recalcularTotal(nuevoCarrito);
        actualizarCantidadCarrito();  
    };

    const actualizarCantidad = (idProducto, nuevaCantidad) => {
        const nuevoCarrito = carrito.map(item => {
            if (item.getProducto().idProducto === idProducto) {
                let cantidad = parseInt(nuevaCantidad);
                if (cantidad < 1) cantidad = 1;
                if (cantidad > item.getProducto().stockProducto) cantidad = item.getProducto().stockProducto;

                item.setCantidadProducto(cantidad);
                item.setTotalProducto(cantidad * item.getProducto().precioProducto);
            }
            return item;
        });

        setCarrito(nuevoCarrito);
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito.map(item => ({
            producto: item.getProducto(),
            cantidadProducto: item.getCantidadProducto(),
            totalProducto: item.getTotalProducto()
        }))));
        recalcularTotal(nuevoCarrito);
    };

    const pagarCompra = () => {
        const ventas = JSON.parse(localStorage.getItem('ventas')) || [];
        const productos = JSON.parse(localStorage.getItem('productos')) || [];
        carrito.forEach(item => {
            const venta = new Ventas(
                item.getProducto().idProducto,
                item.getProducto().nombreProducto,
                item.getProducto().stockProducto,
                item.getProducto().precioProducto,
                item.getProducto().fotoProducto,
                item.getCantidadProducto(),
                item.getTotalProducto()
            );
            ventas.push(venta);

            const producto = productos.find(p => p.idProducto === item.getProducto().idProducto);
            if (producto) {
                producto.stockProducto -= item.getCantidadProducto();
            }
        });

        const productosActualizados = productos.filter(p => p.stockProducto > 0);

        localStorage.setItem('ventas', JSON.stringify(ventas));
        localStorage.setItem('productos', JSON.stringify(productosActualizados));
        localStorage.removeItem('carrito');
        alert('Compra realizada con éxito');
        actualizarProductos(); // Actualizar los productos en el Dashboard
        actualizarCantidadCarrito(); // Actualizar la cantidad de productos en el carrito
        setView('productos'); // Redirigir a la vista de productos en el Dashboard
    };

    return (
        <div className="container" >
            {carrito.length > 0 ? (
                carrito.map(item => (
                    <div key={item.getProducto().idProducto} className="card mb-3" style={{ maxWidth: '540px' }} id={`card-${item.getProducto().idProducto}`}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`img/${item.getProducto().fotoProducto}`} className="card-img-top" alt={item.getProducto().nombreProducto} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.getProducto().nombreProducto}</h5>
                                    <p className="card-text">ID: {item.getProducto().idProducto}</p>
                                    <p className="card-text">Stock: {item.getProducto().stockProducto}</p>
                                    <p className="card-text">Precio (unitario): ${item.getProducto().precioProducto}</p>
                                    <p className="number-container card-text">
                                        Cantidad:
                                        <input
                                            type="number"
                                            className="form-control card-text"
                                            value={item.getCantidadProducto()}
                                            min="1"
                                            max={item.getProducto().stockProducto}
                                            onChange={(e) => actualizarCantidad(item.getProducto().idProducto, e.target.value)}
                                        />
                                    </p>
                                    <p className="number-container card-text">
                                        Total: $
                                        <input
                                            type="number"
                                            className="form-control card-text"
                                            readOnly
                                            value={item.getTotalProducto()}
                                        />
                                    </p>
                                    <button type="button" className="btn btn-primary position-relative" onClick={() => eliminarProductoCarro(item.getProducto().idProducto)}>Quitar del carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No hay productos en el carrito.</p>
            )}
            {carrito.length > 0 && (
                <footer>
                    <p className="number-container card-text">
                        Total: $
                        <input
                            type="number"
                            id="totalPagina"
                            className="form-control card-text"
                            readOnly
                            value={totalFinal}
                        />
                        <button type="button" className="btn btn-primary position-relative" onClick={pagarCompra}>Pagar Compra</button>
                    </p>
                </footer>
            )}
        </div>
    );
};

export default VerCarrito;

