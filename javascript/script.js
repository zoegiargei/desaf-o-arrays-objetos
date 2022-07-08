//Productos-objetos

//Refrigeración
const heladeraStock = new Producto("heladera", 300000, 50);
const freezerStock = new Producto("freezer", 100200, 25);

//Cocción
const microondasStock = new Producto("microondas", 40800, 30);
const hornoStock = new Producto("horno", 95999, 22);

//Batidoras
const batidoraManualStock = new Producto("batidora Manual", 6999, 17);
const batidoraMesaStock = new Producto("batidora de Mesa", 22399, 22);

//Lavado
const lavavajillasStock = new Producto("lavavajillas", 129999, 25);
const lavarropasStock = new Producto("lavarropas", 120999, 40);

// Creé este array (productos) solo para aplicar el método .slice() , con el fín de aplicar la mayoría de los métodos vistos en clase
const productos = []

productos.push(heladeraStock)
productos.push(freezerStock)
productos.push(microondasStock)
productos.push(hornoStock)
productos.push(batidoraManualStock)
productos.push(batidoraMesaStock)
productos.push(lavavajillasStock)
productos.push(lavarropasStock)

menu()

const carritoNombres = []
const carritoPrecios = []

for(const productos of carrito){
    carritoNombres.push(productos.nombre)
    carritoPrecios.push(productos.precio)
}

let texto = (` - Carrito de compras - \n`)
document.write(`${texto}\n\n`)

carritoNombres.join("-")
carritoPrecios.join("-")

document.write(`Productos comprados: ${carritoNombres}`)
document.write(`Precios: ${carritoPrecios}`)