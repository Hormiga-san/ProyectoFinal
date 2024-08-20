export class Producto{
    constructor(idProducto,nombreProducto,stockProducto,precioProducto,fotoProducto){
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.stockProducto = stockProducto;
        this.precioProducto = precioProducto;
        this.fotoProducto = fotoProducto;
    };
    
    getidProducto(){
        return this.idProducto;
    }
    setidProducto(idProducto){
        this.idProducto = idProducto;
    }

    getnombreProducto(){
        return this.nombreProducto;
    }
    setnombreProducto(nombreProducto){
        this.nombreProducto = nombreProducto;
    }

    getstockProducto(){
        return this.stockProducto;
    }
    setstockProducto(stockProducto){
        this.stockProducto = stockProducto;
    }

    getprecioProducto(){
        return this.precioProducto;
    }
    setprecioProducto(precioProducto){
        this.precioProducto = precioProducto;
    }

    getfotoProducto(){
        return this.fotoProducto;
    }
    setfotoProducto(fotoProducto){
        this.fotoProducto = fotoProducto;
    }
}


