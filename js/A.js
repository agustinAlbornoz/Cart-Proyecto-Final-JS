
const carritoTotal = 0;
const itemsDentroCarrito = [];


 /***********************************************     BUSCAR ITEM                ***********************************************************************/


resultado = ''; 
const filtrar = () => {

    const buscador = 'camisa de hombre';  /* PODES BUSCAR ITEMS DESDE ACA*/

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


 /* EJECUTAR BUSCADOR */
 /* MOSTRAR RESULTADO DE LA FUNCTION BUSCADOR */

 /***********************************************     FUNCION COMPRAR                ***********************************************************************/




const comprarItemsBotones = (parametro) => {
    if(productosEnVenta[parametro].stock > 0){
        carritoTotal+=productosEnVenta[parametro].precio;
        productosEnVenta[parametro].stock -= 1;
        itemsDentroCarrito.push(productosEnVenta[parametro]);
        localStorage.setItem('keyItems', JSON.stringify(itemsDentroCarrito));
        localStorage.setItem('keyPrecio', JSON.stringify(carritoTotal));

        
        
    }else if(productosEnVenta[parametro].stock === 0){
        document.getElementById(`btn-${parametro}`).innerHTML =
        ` <button class="btn btn-primary" type="button" role="button" id="btn-0" onclick="comprar(0)" disable>Sin stock</button>
`;
    }
    storage();
    generarCards(itemsDentroCarrito); //GENERA CARDS DE ITEMS COMPRADOS
    generarCardsNumeros(carritoTotal);//GENERA PRECIO FINAL DE LOS PRODUCTOS COMPRADOS
    mostrarTotalItems(); //GENERA NUMERO DE ITEMS EN CARRITO

}; // FUNCIONA PERFECTO


const storage = () => {
    localStorage.setItem('keyItems', JSON.stringify(itemsDentroCarrito));
    localStorage.setItem('keyPrecio', JSON.stringify(carritoTotal));
}
/*************************************************************************************************************/


/***********************************************    CARRITO               ***********************************************************************/

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) =>{
        acumuladorDeCards += `<li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
            <h6 class="my-0">${elementoDelArray.nombre}</h6>
            <small class="text-muted">${elementoDelArray.descripcion}</small>
        </div>
        <span class="text-muted">$${elementoDelArray.precio}</span>
        </li>`;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("carritoProductosDescripcion").innerHTML = cards;
};

// CARDS NUMEROS 
function generarCardsNumeros(acumuladorNumeros){
    acumuladorNumeros = `<span>Total</span>
            <strong> $${carritoTotal} </strong>`;
        mostrarNumerosProductosEnHTML(acumuladorNumeros);
    }
    

function mostrarNumerosProductosEnHTML(precios) {
    document.getElementById("cantidadItemsCarrito").innerHTML = precios;
};


//ITEMS TOTALES EN CARRITO

function mostrarTotalItems(){
    document.getElementById("cantidadTotalItems").innerHTML =  itemsDentroCarrito.length;
}


// CARD DESCUENTOS
function generarCardsDescuentos(){
    descuentoFunction = `<div class="text-success">
    <h6 class="my-0">codigo: ${numeroPromo}</h6>
    <small>codigo valido</small>
</div>
<span class="text-success">${descuentoCodigos}</span>
`;
        mostrarNumerosProductosEnHTML(descuentoFunction);
    }

function generarCodigoDescuentoCarrito(E){
    document.getElementById("generarDOMDescuento").innerHTML = E;
}

// FUNCION CODIGO DESCUENTO


let numeroPromo = 'descuento';  /** CODIGO DESCUENTO **/
let descuentoCodigos = -500;

function codigoPromo(){
    const clienteCodigoPromo = document.getElementById("TextoCodigo").value;
    if(numeroPromo == clienteCodigoPromo){
        carritoTotal += descuentoCodigos;
        generarCardsDescuentos();
        generarCardsNumeros(carritoTotal);
        document.getElementById("generarDOMDescuento").innerHTML =
        `<div class="text-success">
    <h6 class="my-0">codigo: ${numeroPromo}</h6>
    <small>codigo valido</small>
</div>
<span class="text-success">${descuentoCodigos}</span>
`;
        numeroPromo = 2154655464;  //PUSE CUALQUIER NUMERO PARA QUE NO ME SIGA TOMANDO EL CODIGO, !Crear array con diferentes codigos
    }else if(numeroPromo != clienteCodigoPromo){
        document.getElementById("generarDOMDescuento").innerHTML =
        `<div class="text-danger">
    <h6 class="my-0">codigo: ${clienteCodigoPromo}</h6>
    <small>Es invalido</small>
</div>
`;
    }else if (clienteCodigoPromo === numeroPromo){
        alert('El codigo de descuento ya se utilizo')
    }
};


