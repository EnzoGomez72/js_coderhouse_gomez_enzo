
function itemNegativo(){
    alert("Tu carrito esta vacio");
}

let carrito = [];

class Producto {
    constructor(nombre, precio, unidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.unidad = unidad;
    }
}

do{
    option = prompt(`Bienvenido a AVANTI, elija una de las siguientes opciones:  
    1. Añadir item al carrito
    2. eliminar item del carrito 
    3. Ver Total
    0. Vaciar y cerrar carrito`);
    
    switch(option){
    case "1":
        let nombre = prompt("Ingrese el item a añadir (Gorra, Remera, Hoodie, Jean) IMPORTANTE: El prompt es case sensitive");
        if((nombre == "Gorra") || (nombre == "Remera") || (nombre == "Hoodie") || (nombre == "Jean")){
            switch (nombre){
                case "Gorra":
                    precio = 20000;
                    break;
                case "Remera":
                    precio = 40000;
                    break;
                    case "Hoodie":
                    precio = 60000;
                    break;
                case "Jean":
                    precio = 80000;
                    break;
                default:
                    break;
            }
            let unidad = Number(prompt("Cuantas unidades quiere llevar?"));
            if(unidad >= 1){
                let producto = new Producto(nombre, precio, unidad);
                carrito.push(producto);
                alert("Item añadido correctamente");
                continue;
                }
            else(unidad <= 0);{
                alert("Ingrese una cantidad valida");
                break;
            }
        }
        else((nombre != "Gorra") || (nombre != "Remera") || (nombre != "Hoodie") || (nombre != "Jean"));{
            alert("Producto no disponible, porfavor añade otro item")
            break;
        }

        case"2":
            if (carrito.length === 0) {
                itemNegativo(); 
                break;
            }
            else{
                let eliminarProducto = "Lista de productos:\n";
                carrito.forEach((producto, index) => {
                    eliminarProducto = eliminarProducto + `${index + 1}.\n Producto: ${producto.nombre} \n Precio: $ ${producto.precio} \n Unidades: ${producto.unidad}\n`;
                });
                eliminarProducto = "\nIngrese el numero del producto a eliminar del carrito\n" + eliminarProducto;

                let numeroProducto = Number(prompt(eliminarProducto));
                if (!isNaN(numeroProducto) && (numeroProducto >= 1) && (numeroProducto <= carrito.length)){
                    let index = numeroProducto - 1;
                    carrito.splice(index, 1);
                    alert("Producto eliminado correctamente del carrito");
                    continue;
                }
                else{
                    alert("Ingrese un numero de producto valido");
                    break;
                }
            }

        case "3":
                if (carrito.length === 0) {
                    itemNegativo();
                    break;
                }
                else{
                    let listaProducto = "Lista de productos:\n";
                    carrito.forEach((producto, index) => {
                        listaProducto = listaProducto + `${index + 1}.\n Producto: ${producto.nombre} \n Precio: $ ${producto.precio} \n Unidades: ${producto.unidad}\n`;
                    });
                    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidad, 0);
                    alert(`${listaProducto} \nEl total de tu compra es de $ ${total}`);
                    break;
                }

            case "0":
                alert("Tu carrito se ha vaciado por completo, hasta la proxima!")
                break;
                default:
                    alert("Ingrese una opcion valida")
                    break;
                }
            } while (option != 0)