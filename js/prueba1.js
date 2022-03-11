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

console.log(productosEnVenta); /*CHEQUEAR QUE ESTEN TODOS LOS PRODUCTOS CORRECTAMENTE EN ARRAY*/
 /***********************************************       DATOS CLIENTE             ***********************************************************************/


let nombre = prompt('Cual es tu nombre?');
let apellido = prompt('Cual es tu apellido?');

const saludoComprador = () => { 
    alert(`Hola! ${nombre} ${apellido} gracias por visitarnos`);
}

saludoComprador();    /* EJECUTAR SALUDO */
 /***********************************************     BUSCAR ITEM                ***********************************************************************/


resultado = ''; 
const filtrar = () => {

    const buscador = 'pepe';  /* PODES BUSCAR ITEMS DESDE ACA*/

    const texto = buscador.toLowerCase();

    
    for(let producto of productosEnVenta){
            let nombres = producto.nombre.toLowerCase();
                if(nombres.indexOf(texto) !== -1){
                    resultado += `nombre: ${producto.nombre} Valor: $${producto.precio} stock: ${producto.stock} `;
            }
    }

    if(resultado === ''){
        resultado += 'No se encontro el producto';
    }
}


filtrar(); /* EJECUTAR BUSCADOR */
console.log(resultado); /* MOSTRAR RESULTADO DE LA FUNCTION BUSCADOR */

 /***********************************************     FUNCION COMPRAR                ***********************************************************************/
let comprarItems; /* GUARDA PROMPT DE CONTINUAR COMPRANDO */

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


comprar(); /* EJECUTAR COMPRAR */
console.log(itemsDentroCarrito); /* MOSTRAR ITEMS COMPRADOS */

 /***********************************************     FUNCION COMPRAR                ***********************************************************************/

const numeroPromo = 'descuento';  /** CODIGO DESCUENTO **/
const descuentoCodigos = 500;

const codigoPromo = () =>{
    const clienteCodigoPromo= prompt('¿Tenes algun codigo de descuento?')
    if(numeroPromo === clienteCodigoPromo ){
        carritoTotal -= descuentoCodigos;
        alert(`Tu codigo de descuento es de $${descuentoCodigos},
        el total de tu carrito es de $${carritoTotal}`)
    }else if(numeroPromo != clienteCodigoPromo){
        alert('Lo sentimos, pero el codigo no es valido')
    }

}

codigoPromo(); /* EJECUTAR CODIGO PROMO */