export class Ventas{
    constructor(idProducto,nombreProducto,stockProducto,precioProducto,fotoProducto,cantidadProducto,totalProducto){
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.stockProducto = stockProducto;
        this.precioProducto = precioProducto;
        this.fotoProducto = fotoProducto;
        this.cantidadProducto = cantidadProducto;
        this.totalProducto = totalProducto;
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
    getcantidadProducto(){
        return this.cantidadProducto;
    }
    setcantidadProducto(cantidadProducto){
        this.cantidadProducto = cantidadProducto;
    }
    gettotalProducto(){
        return this.totalProducto;
    }
    settotalProducto(totalProducto){
        this.totalProducto = totalProducto;
    }
}
let ventas=[];
localStorage.setItem("ventas", JSON.stringify(ventas));
