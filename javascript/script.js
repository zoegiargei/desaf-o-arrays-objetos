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

menu()

let texto = (` - Carrito de compras - `)
document.write(texto)