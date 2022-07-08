let op, opcion, numProducto=0, productoAEliminar, montoTotal=0, formaPago=0, formaDePago

const carrito = []


// Función para eliminar producto del carrito
function eliminarProductoCarrito(productoAEliminar){
   
    /*
    for (let i=0; i < carrito.length ; i++){
        if (carrito[i].nombre == productoAEliminar){
            alert(`Se eliminará el producto del carrito de compras.`)
            carrito.splice(i, 1)

        }
    }
    */

    for (const producto of carrito){
        if(producto.nombre == productoAEliminar){
            let indice = carrito.indexOf(productoAEliminar)
            alert(`Se eliminará el producto del carrito de compras.`)
            carrito.splice(indice, 1)
            
            break
        }
    }

    // buscar producto con método .find()
   /*
    if(carrito.find(producto => producto.nombre == productoAEliminar)){
        let existe = true
    }

    let existe = carrito.some(producto ==> producto.nombre == productoAEliminar)

    if(existe){
        
        for (let i=0; i < carrito.length ; i++){
        if (carrito[i].nombre == productoAEliminar){
            alert(`Se eliminará el producto del carrito de compras.`)
            carrito.splice(i, 1)
            }
        }
    } else{
        alert(`No se encontro el producto`)
    }
    */
}



// Función para mostrar el catálogo
function mostrarCatalogo(){

    alert(`
    - Refrigeración \n
    ${heladeraStock.nombre}   Precio: $${heladeraStock.precio}\n
    ${freezerStock.nombre}   Precio: $${freezerStock.precio}\n
    - Cocción \n
    ${microondasStock.nombre}   Precio: $${microondasStock.precio}\n
    ${hornoStock.nombre}   Precio: $${hornoStock.precio}\n
    - Batidoras \n
    ${batidoraManualStock.nombre}   Precio: $${batidoraManualStock.precio}\n
    ${batidoraMesaStock.nombre}   Precio: $${batidoraMesaStock.precio}\n
    -Lavado \n
    ${lavavajillasStock.nombre}   Precio: $${lavavajillasStock.precio}\n
    ${lavarropasStock.nombre}   Precio: $${lavarropasStock.precio}\n
    `)

    alert(`

    -OFERTAS DE ÉSTE MES \n

    Llevando más de un producto -> 10% de descuento!! \n

    SALE en refrigeración -> 5% de descuento en todos los productos!! \n
    SALE en cocción -> 10% de descuento en todos los productos \n
    `)

}



// Función para realizar compra + agregar producto al array Carrito[] con método .push()
function comprarProducto(numProducto){

    switch(numProducto){

        case 1:

            const heladera = new ProductoComprado("heladera", heladeraStock.precio)
            heladera.ofertaPrecio(0.05)

            heladeraStock.disminuirStock(1)

            carrito.push(heladera)

            alert(`Este producto tiene 5% de descuento`)

        break

        case 2:

            const freezer = new ProductoComprado("freezer", freezerStock.precio)
            freezer.ofertaPrecio(0.05)

            freezerStock.disminuirStock(1)

            carrito.push(freezer)

            alert(`Este producto tiene 5% de descuento`)

        break

        case 3:

            const microondas = new ProductoComprado("microondas", microondasStock.precio)
            microondas.ofertaPrecio(0.10)

            microondasStock.disminuirStock(1)
            
            carrito.push(microondas)

            alert(`Este producto tiene 10% de descuento`)

        break

        case 4:

            const horno = new ProductoComprado("horno", microondasStock.precio)
            horno.ofertaPrecio(0.10)

            hornoStock.disminuirStock(1)

            carrito.push(horno)

            alert(`Este producto tiene 10% de descuento`)

        break

        case 5:
            
            const batidoraManual = new ProductoComprado("batidora manual", batidoraManualStock.precio)

            batidoraManualStock.disminuirStock(1)

            carrito.push(batidoraManual)

        break

        case 6:
                                        
            const batidoraMesa = new ProductoComprado("batidora de mesa", batidoraMesaStock.precio)
            batidoraMesaStock.disminuirStock(1)

            carrito.push(batidoraMesa)

        break

        case 7:

            const lavavajillas = new ProductoComprado("lavavajillas", lavavajillasStock.precio)

            lavavajillasStock.disminuirStock(1)

            carrito.push(lavavajillas)

        break

        case 8:

            const lavarropas = new ProductoComprado("lavarropas", lavarropasStock.precio)
            lavarropasStock.disminuirStock(1)

            carrito.push(lavarropas)

        break
    }
}


// Funcón para validar ingreso de dato numérico entero
// Pide como parámetros el mensaje a mostrar, el número minimo válido y el número máximo válido
function validarNumero(mensaje,min,max){

    opcion = parseInt(prompt(`${mensaje}`))

    while(isNaN(opcion) || opcion<min || opcion>max){
        alert(`Dato no válido. Intente de nuevo... \n`)
        opcion = parseInt(prompt(`${mensaje}`))
    }

    return opcion
}


// Creé esta función solo para aplicar la mayoría de los métodos vistos en clase, en este caso el método .slice()
function mostrarSeccion(){

    let seccion = prompt(`Secciones: refrigeración - cocción - batidoras - lavado`).toLowerCase()

    if (seccion == "refrigeracion" || seccion == "refrigeración"){
        const refrigeracion = productos.slice(0,2)
        for(const producto of refrigeracion){
            alert(producto.nombre)
        }
    } else if(seccion == "coccion" || seccion == "cocción"){
        const coccion = productos.slice(2,4)
        for(const producto of coccion){
            alert(producto.nombre)
        }
    } else if(seccion == "batidoras"){
        const batidoras = productos.slice(4,6)
        for(const producto of batidoras){
            alert(producto.nombre)
        }
    } else if(seccion == "lavado"){
        const lavado = productos.slice(6,8)
        for(const producto of lavado){
            alert(producto.nombre)
        }
    } else{
        "Ingresó una sección que no existe"
    }
}



// Función principal para llamar a las demás funciones según la opción que eliga el usuario, se hizo con if, if else y no con swich por una cuestion de preferencia
function menu(){

    alert(`Bienvenido a la tienda de -whirlpool-`)

    while(op!=7){
        
        op = validarNumero(`
        1. Ver Catálogo \n
        2. Agregar producto al carrito \n
        3. Mostrar Carrito \n
        4. Eliminar producto del carrito \n
        5. Mostrar productos por secciones \n
        6. Ir a Pagar\n
        7. Salir de la tienda \n

        Ingrese el número de la opción elegida: 
        `,1,7)
        

        if(op==1){

            mostrarCatalogo()

        } else if(op==2){

            numProducto = validarNumero(`
                1. Heladera \n
                2. Freezer \n
                3. Microondas \n
                4. Horno \n
                5. Batidora de Mano \n
                6. Batidora de Mesa \n
                7. Lavavajillas \n
                8. Lavarropas \n
                9. Volver al menu \n
            
                Ingrese el número del producto que quiere agregar al carrito: `,1,9)
            
            comprarProducto(numProducto)

        } else if(op==3){

            if(carrito.length > 0){

                alert(` - Productos que agregó al carrito - `)

                for (let i=0; i < carrito.length ; i++){

                    alert(`producto: ${carrito[i].nombre} precio: $${carrito[i].precio}`)
                }

            } else{alert(`No se agregaron productos al carrito`)}

        } else if(op==4){

            productoAEliminar = prompt(`Ingrese el producto que quiere eliminar del carrito: `).toLowerCase()
            eliminarProductoCarrito(productoAEliminar)

            montoTotal=0

            /* Otro método para calcular monto total de compra
            for(let i=0; i < carrito.length ; i++){

                montoTotal += carrito[i].precio
            }
            */

            for (const producto of carrito){
                montoTotal += producto.precio
                montoTotal.toFixed(2)
            }

        } else if(op == 5){
            mostrarSeccion()
        } else if(op==6){

            console.log(` - Ticket - \n`)

            montoTotal=0

            // Cálculo del monto total
            for (const producto of carrito){
                montoTotal += producto.precio
                montoTotal.toFixed(2)
            }

            // llevando más de un producto se aplica 10% de descuento
            if (carrito.length >= 2){
                montoTotal -= (montoTotal*0.1)
                montoTotal.toFixed(2)

                console.log(`Tiene 10% de descuento en el monto total de la compra por llevar más de 1 de nuestros productos!`)
            }

            formaPago = parseInt(prompt(`
            -FORMAS DE PAGO \n
            
            1. Efectivo -> 10% de descuento.
            2. Débito -> Mismo precio.
            3. Crédito -> 10% Recargo.
        
            Ingrese el número de la opción que eligió:

            `))
        
            //Opciones de forma de pago
            switch(formaPago){
        
                case 1:

                    formaDePago = "EFECTIVO"
                    alert(`El descuento por abonar en efectivo es $ ${(montoTotal.toFixed(2)*0.1)}`)
                    montoTotal -= (montoTotal*0.1)
                    montoTotal.toFixed(2)
                    
                break

                case 2:
                    formaDePago = "DÉBITO"
                break
        
                case 3:

                formaDePago = "CRÉDITO"

                    alert(`El recargo por abonar con crédito es $ ${(montoTotal.toFixed(2)*0.1)}`)
                    montoTotal += (montoTotal*0.1)
                    montoTotal.toFixed(2)
                break
            }

            alert(`El monto total a pagar, con descuentos incluidos es: $ ${montoTotal}\n ¡Gracias por su compra!`)

            /*
            for (let i=0; i < carrito.length ; i++){
                console.log(`${carrito[i].nombre} precio: $ ${carrito[i].precio}\n\n`)
            }
            */

            for (const producto of carrito){console.log(`${producto.nombre} precio: $ ${producto.precio}\n\n`)}

            if(formaDePago == "EFECTIVO"){
                console.log(`Abona en efectivo. Tiene 10% de descuento\n\n`)
            } else if(formaDePago == "DÉBITO"){
                console.log(`Abona con DÉBITO. El precio final queda igual\n\n`)
            } else{
                console.log(`Abona con CRÉDITO. Tiene 10% de recargo\n\n`)
            }

            console.log(`El precio final a abonar es: $ ${montoTotal.toFixed(2)}\n`)
            

            op = 7 //Cortamos el ciclo while

        } else if (op == 7){
            alert(` -El ticket se mostrará por consola-\nHasta luego!`)
        }

    }
}