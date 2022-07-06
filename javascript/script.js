//Productos-objetos

//Refrigeración
const heladera = new Producto("heladera", 300000, 50);
const freezer = new Producto("freezer", 100200, 25);

//Cocción
const microondas = new Producto("microondas", 40800, 30);
const horno = new Producto("horno", 95999, 22);

//Batidoras
const batidoraManual = new Producto("batidora Manual", 6999, 17);
const batidoraMesa = new Producto("batidora de Mesa", 22399, 22);

//Lavado
const lavavajillas = new Producto("lavavajillas", 129999, 25);
const lavarropas = new Producto("lavarropas", 120999, 40);

menu()

let texto = (` - Carrito de compras - `)
document.write(texto)
document.write(carrito)