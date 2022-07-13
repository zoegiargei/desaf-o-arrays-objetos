class Producto{
    constructor(nombre, precio, stock, tipo){
        this.nombre = nombre;
        this.marca = "whirlpool";
        this.precio = precio;
        this.stock = stock;
        this.tipo = tipo;
    }

    /*Métodos*/

    aumentoPrecio(porcentajeAumento) {
        this.precio *= porcentajeAumento;
    }

    ofertaPrecio(porcentajeOferta){
        this.precio -= this.precio * porcentajeOferta;
    }

    aumentoStock(nuevoStock){
        this.stock += nuevoStock;
    }

    disminuirStock(cantidadMenos){
        this.stock -= cantidadMenos;
    }
}

class ProductoComprado extends Producto{
    constructor(nombre,precio){
        super(nombre,precio)
    }
}