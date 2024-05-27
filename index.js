let total = 0;
let option;
function itemNegativo(){
    alert("El item no se encuentra en el carrito");
}


do{
    option = prompt(`Bienvenido a AVANTI, Ingrese el valor de la prenda a eleccion (Remera = 40000, Hoodie = 60000, Jean = 80000, gorra = 20000) dentro de las siguientes opciones:  
    1. Añadir item al carrito
    2. eliminar item del carrito 
    3. Ver Total
    0. Vaciar y cerrar carrito`);

    switch(option){
    case "1":
        let item = Number(prompt("Ingresa el valor del item a añadir (Remera = 40000, Hoodie = 60000, Jean = 80000, gorra = 20000)"));
        if((item == 20000) || (item == 40000) || (item == 60000) || (item == 80000)){
            total = total + item;
            alert("Item añadido al carrito correctamente.");
            continue;
        }
        else((item != 20000) || (item != 40000) || (item != 60000) || (item != 80000));{
            total = total - item + item;
            alert('Item no disponible, porfavor añade otro item')
            break;
    }
        case"2":
        if(total == 0){
            alert("Tu carrito esta vacio")
            break;
            
        }
        else{
            let eliminarItem = Number(prompt("Ingresa el valor del item a eliminar (Remera = 40000, Hoodie = 60000, Jean = 80000, gorra = 20000)"));
            if((eliminarItem == 20000) || (eliminarItem == 40000) || (eliminarItem == 60000) || (eliminarItem == 80000)) {
                total = total - eliminarItem;
                if(total >= 0){
                    alert("Item eliminado correctamente del carrito");
                    continue;
                }
                else(total < 0);{
                    total = total + eliminarItem;
                    itemNegativo();
                    break;
                }
        }
                else{
                    total = total + eliminarItem - eliminarItem;
                    itemNegativo();
                break;
        }
        }

        case "3":
            alert("Tu total es de $" + total + ".");
            break;

        case "0":
            alert("Tu carrito se ha vaciado por completo, hasta la proxima!")
            break;
        default:
            alert("Ingrese una opcion valida")
            break;
            }
    } while (option != 0)