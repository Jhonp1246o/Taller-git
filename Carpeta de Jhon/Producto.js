// Capa de Dominio
// Declara una clase llamada Producto
var Producto = /** @class */ (function () {
    function Producto(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    return Producto;
}());
// Este constructor toma dos parámetros: nombre (string) y precio (number).
// Al ser públicos, se pueden acceder desde fuera de la clase.
// Capa de Aplicación
// Esta clase se encargará de gestionar la lógica relacionada con los productos.
var ProductoService = /** @class */ (function () {
    function ProductoService() {
        this.productos = [];
    }
    // La propiedad privada 'productos' almacena una lista de instancias de Producto.
    ProductoService.prototype.agregarProducto = function (producto) {
        // Método que permite agregar un nuevo producto a la lista
        this.productos.push(producto);
    };
    ProductoService.prototype.obtenerProductos = function () {
        // Método que devuelve la lista de productos almacenados
        return this.productos;
    };
    return ProductoService;
}());
// Capa de Presentación
var productoService = new ProductoService();
// Se crea una instancia del servicio de productos
productoService.agregarProducto(new Producto("Laptop", 1200.50));
// Se crea y agrega un nuevo producto a la lista
productoService.agregarProducto(new Producto("Mouse inalámbrico", 25.99));
// Se puede agregar más de un producto si se desea
console.log(productoService.obtenerProductos());
// Se imprime en consola la lista de productos registrados
