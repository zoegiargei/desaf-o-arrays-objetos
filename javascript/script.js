//Productos-objetos

//Refrigeración
const heladeraStock = new Producto("heladera", 300000, 50, "refrigeracion");
const freezerStock = new Producto("freezer", 100200, 25, "refrigeracion");

//Cocción
const microondasStock = new Producto("microondas", 40800, 30, "coccion");
const hornoStock = new Producto("horno", 95999, 22, "coccion");

//Batidoras
const batidoraManualStock = new Producto("batidora Manual", 6999, 17, "batidoras");
const batidoraMesaStock = new Producto("batidora de Mesa", 22399, 22, "batidoras");

//Lavado
const lavavajillasStock = new Producto("lavavajillas", 129999, 25, "lavado");
const lavarropasStock = new Producto("lavarropas", 120999, 40, "lavado");


const productos = [heladeraStock, freezerStock, microondasStock, hornoStock, batidoraManualStock, batidoraMesaStock, lavarropasStock, lavavajillasStock]
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