class productos {
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
let productosEnVenta = [];
let carritoTotal = 0;
const itemsDentroCarrito = [];

 /***********************************************       PRODUCTOS                ***********************************************************************/
productosEnVenta.push(new productos(1, 'Camisa de hombre', 1500, 2));
productosEnVenta.push(new productos(2, 'buzo de hombre 1', 2500, 5));
productosEnVenta.push(new productos(3, 'buzo de hombre 2', 1700, 0));
productosEnVenta.push(new productos(4, 'bermuda de hombre', 2000, 8));


 /***********************************************       DATOS CLIENTE             ***********************************************************************/
let nombre = prompt('Cual es tu nombre?');
let apellido = prompt('Cual es tu apellido?');

const saludoComprador = () => { 
    alert(`Hola! ${nombre} ${apellido} gracias por visitarnos`);
}
console.log(productosEnVenta);
saludoComprador();

let comprarItems;

 /***********************************************     FUNCION COMPRAR                ***********************************************************************/
const comprar = () => {
    do{
    const agregarAlCarrito=prompt(`
        Selecciona el producto que quieras comprar entre los valores 1 y 4
        1. ${productosEnVenta[0].nombre}   valor  $${productosEnVenta[0].precio}
        2. ${productosEnVenta[1].nombre}   valor  $${productosEnVenta[1].precio}
        3. ${productosEnVenta[2].nombre}   valor  $${productosEnVenta[2].precio}
        4. ${productosEnVenta[3].nombre}   valor  $${productosEnVenta[3].precio}`)

    switch(agregarAlCarrito){
        case '1':
            if(productosEnVenta[0].stock > 0){
                carritoTotal+=productosEnVenta[0].precio;
                productosEnVenta[0].stock -= 1;
                itemsDentroCarrito.push(productosEnVenta[0]);
                
            }else if(productosEnVenta[0].stock === 0){
                alert(`en este momento tenemos ${productosEnVenta[0].stock} stock, lo sentimos`)
            }
            break;
        case '2':
            if(productosEnVenta[1].stock > 0){
                carritoTotal+=productosEnVenta[1].precio;
                productosEnVenta[1].stock -= 1;
                itemsDentroCarrito.push(productosEnVenta[1]);
            }else if(productosEnVenta[1].stock === 0){
                alert(`en este momento tenemos ${productosEnVenta[1].stock} stock, lo sentimos`)
            }
            break;
        case '3':
            if(productosEnVenta[2].stock > 0){
                carritoTotal+=productosEnVenta[2].precio;
                productosEnVenta[2].stock -= 1;
                itemsDentroCarrito.push(productosEnVenta[2]);
            }else if(productosEnVenta[2].stock === 0){
                alert(`en este momento tenemos ${productosEnVenta[2].stock} stock, lo sentimos`)
            }
            break;
        case '4':
            if(productosEnVenta[3].stock > 0){
                carritoTotal+=productosEnVenta[3].precio;
                productosEnVenta[3].stock -= 1;
                itemsDentroCarrito.push(productosEnVenta[3]);
            }else if(productosEnVenta[3].stock === 0){
                alert(`en este momento tenemos ${productosEnVenta[3].stock} stock, lo sentimos`)
            }
            break;
        default: 
            alert('lo sentimos, vuelve a intentar con un valor del 1 al 4')
            break;
    }
    comprarItems=prompt("si queres seguir comprando escribe SI, si no, escribe NO") 
}while(comprarItems !=="NO")
alert(`Gracias por tu compra ${nombre}, el total de tu carrito es de $${carritoTotal}`)
}

comprar();
console.log(itemsDentroCarrito);