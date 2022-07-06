let op, opcion, numProducto=0, productoAEliminar, montoTotal=0, formaPago=0, formaDePago

const carrito = []



// Función para eliminar producto del carrito
function eliminarProductoCarrito(productoAEliminar){
   
    for (let i=0; i < carrito.length ; i++){
        if (carrito[i].nombre == productoAEliminar){
            alert(`Se eliminará el producto del carrito de compras.`)
            carrito.splice(i, 1)

        }
    }
    
}



// Función para mostrar el catálogo
function mostrarCatalogo(){

    alert(`
    - Refrigeración \n
    ${heladera.nombre}   Precio: $${heladera.precio}\n
    ${freezer.nombre}   Precio: $${freezer.precio}\n
    - Cocción \n
    ${microondas.nombre}   Precio: $${microondas.precio}\n
    ${horno.nombre}   Precio: $${horno.precio}\n
    - Batidoras \n
    ${batidoraManual.nombre}   Precio: $${batidoraManual.precio}\n
    ${batidoraMesa.nombre}   Precio: $${batidoraMesa.precio}\n
    -Lavado \n
    ${lavavajillas.nombre}   Precio: $${lavavajillas.precio}\n
    ${lavarropas.nombre}   Precio: $${lavarropas.precio}\n
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

            heladera.ofertaPrecio(0.05)
            heladera.disminuirStock(1)

            carrito.push(heladera)

            // Luego de agregar el objeto Producto heladera al carrito[] volvemos el valor de su atributo .precio a la normalidad

            // CONSULTA!! 
            // PROFE!! ¿es buena práctica hacerlo de éte modo o debería freezar en alguna parte del código el objeto?
            heladera.precio = 300000

        break

        case 2:

            freezer.ofertaPrecio(0.05)
            freezer.disminuirStock(1)

            carrito.push(freezer)
            freezer.precio = 100200

        break

        case 3:

            microondas.ofertaPrecio(0.10)
            microondas.disminuirStock(1)
            
            carrito.push(microondas)
            microondas.precio = 40800

        break

        case 4:

            horno.ofertaPrecio(0.10)
            horno.disminuirStock(1)

            carrito.push(horno)
            horno.precio = 95999

        break

        case 5:
            
            batidoraManual.disminuirStock(1)

            carrito.push(batidoraManual)

        break

        case 6:
                                            
            batidoraMesa.disminuirStock(1)

            carrito.push(batidoraMesa)

        break

        case 7:

            lavavajillas.disminuirStock(1)

            carrito.push(lavavajillas)

        break

        case 8:

            lavarropas.disminuirStock(1)

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



// Función principal para llamar a las demás funciones según la opción que eliga el usuario, se hizo con if, if else y no con swich por una cuestion de preferencia
function menu(){

    alert(`Bienvenido a la tienda de -whirlpool-`)

    while(op!=6){
        
        op = validarNumero(`
        1. Ver Catálogo \n
        2. Agregar producto al carrito \n
        3. Mostrar Carrito \n
        4. Eliminar producto del carrito \n
        5. Ir a Pagar\n
        6. Salir de la tienda \n

        Ingrese el número de la opción elegida: 
        `,1,6)
        

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

            alert(` - Productos que agregó al carrito - `)

            for (let i=0; i < carrito.length ; i++){

                alert(`producto: ${carrito[i].nombre} precio: $${carrito[i].precio}`)
            }

        } else if(op==4){

            productoAEliminar = prompt(`Ingrese el producto que quiere eliminar del carrito: `).toLowerCase()
            eliminarProductoCarrito(productoAEliminar)

            montoTotal=0

            for(let i=0; i < carrito.length ; i++){

                montoTotal += carrito[i].precio
            }

        } else if(op==5){

            console.log(` - Ticket - \n`)

            montoTotal=0
            // Cálculo del monto total
            for(let i=0; i < carrito.length ; i++){

                montoTotal += carrito[i].precio
                montoTotal.toFixed(2)

                // llevando más de un producto se aplica10% de descuento
                if (carrito.length >= 2){
                    montoTotal = (montoTotal*0.1)
                }
            }

            formaPago = parseInt(prompt(`
            -FORMAS DE PAGO \n
            
            1. Efectivo -> 10% de descuento.
            2. Débito -> Mismo precio.
            3. Crédito -> 10% Recargo.
        
            Ingrese el número de la opción que eligió:

            `))
        
            switch(formaPago){
        
                case 1:

                    formaDePago = "EFECTIVO"
                    alert(`El descuento por abonar en efectivo es $ ${(montoTotal*0.1)}`)
                    montoTotal -= (montoTotal*0.1)
                    montoTotal.toFixed(2)

                    alert(montoTotal)
                break

                case 2:
                    formaDePago = "DÉBITO"
                break
        
                case 3:

                formaDePago = "CRÉDITO"
                    alert(`El recargo por abonar con crédito es $ ${(montoTotal*0.1)}`)
                    montoTotal += (montoTotal*0.1)
                    montoTotal.toFixed(2)

                    alert(montoTotal)
                break
            }

            alert(`El monto total a pagar, con descuentos incluidos es: $ ${montoTotal}\n`)

            for (let i=0; i < carrito.length ; i++){
                console.log(`${carrito[i].nombre} precio: $ ${carrito[i].precio}\n`)
            }
            console.log(`El precio final a abonar es: $ ${montoTotal}\n`)

        } else if (op == 6){
            alert(` -los resultados se mostrarán por consola-\nHasta luego!`)
        }

    }
}