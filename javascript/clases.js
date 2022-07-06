class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.marca = "whirlpool";
        this.precio = precio;
        this.stock = stock;
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