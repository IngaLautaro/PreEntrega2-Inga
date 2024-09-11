
function obtenerProducto() {
    return prompt("Ingresa el nombre del producto (o presiona 'Cancelar' para terminar):");
}

function obtenerPrecio(producto) {
    let precio = prompt("Ingresa el precio de " + producto + ":");
    while (isNaN(precio), Number(precio) <= 0) {
        precio = prompt("Precio inválido. Ingresa el precio de " + producto + ":");
    }
    return Number(precio);
}

function listaDeCarrito(carrito) {
    let mensaje = "Lista de productos:\n";
    for (let i = 0; i < carrito.length; i++) {
        mensaje += "Producto " + (i + 1) + ": " + carrito[i].nombre + ", Precio: $" + carrito[i].precio.toFixed(2) + ".\n";
    }
    return mensaje;
}


let carrito = [];

while (true) {
    let nombreProducto = obtenerProducto();
    if (nombreProducto === null) {
        break;
    }

    let precioProducto = obtenerPrecio(nombreProducto);
    carrito.push({ nombre: nombreProducto, precio: precioProducto });
}

let total = carrito.reduce((acc, producto) => acc + producto.precio, 0); 
let mensaje = listaDeCarrito(carrito);
alert(mensaje += "Total a pagar: $" + total.toFixed(2) + ".");
