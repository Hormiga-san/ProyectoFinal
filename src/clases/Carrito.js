export class Carrito {
    constructor(producto, cantidadProducto, totalProducto) {
        this.producto = producto;
        this.cantidadProducto = cantidadProducto;
        this.totalProducto = totalProducto;
    }

    getProducto() {
        return this.producto;
    }

    setProducto(producto) {
        this.producto = producto;
    }

    getCantidadProducto() {
        return this.cantidadProducto;
    }

    setCantidadProducto(cantidadProducto) {
        this.cantidadProducto = cantidadProducto;
    }

    getTotalProducto() {
        return this.totalProducto;
    }

    setTotalProducto(totalProducto) {
        this.totalProducto = totalProducto;
    }
}
