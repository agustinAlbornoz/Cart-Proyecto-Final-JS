let storageItems = JSON.parse(localStorage.getItem('keyItems'));
let storagePrecio = Number(localStorage.getItem('keyPrecio'));
/***********************************************    CARRITO               ***********************************************************************/




function generarCards(e){
    let acumuladorDeCardsVenta = ``;
    e.forEach((elementoDelArray) =>{
        acumuladorDeCardsVenta += `<li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
            <h6 class="my-0">${elementoDelArray.nombre}</h6>
            <small class="text-muted">${elementoDelArray.descripcion}</small>
        </div>
        <span class="text-muted">$${elementoDelArray.precio}</span>
        <button id=quitarBotton-${elementoDelArray.id} type="button"  class="btn-close" aria-label="Close" onclick="quitarItemCarrito(${elementoDelArray.id})"></button>
        </li>
        `;
    });
    mostrarCardsEnElHTML(acumuladorDeCardsVenta);
    generarCardsNumeros(storagePrecio);
    mostrarTotalItems(storageItems.length);

}
generarCards(storageItems); /* GENERO CARDS EN TIENDA*/
function mostrarCardsEnElHTML(cards) {
    document.getElementById("carritoProductosDescripcion").innerHTML = cards;
};

// CARDS NUMEROS 
function generarCardsNumeros(storagePrecio){
    storagePrecio = `<span>Total</span>
            <strong> $${storagePrecio} </strong>`;
        mostrarNumerosProductosEnHTML(storagePrecio);
    }
    

function mostrarNumerosProductosEnHTML(precios) {
    document.getElementById("cantidadItemsCarrito").innerHTML = precios;
};


//ITEMS TOTALES EN CARRITO

function mostrarTotalItems(){
    document.getElementById("cantidadTotalItems").innerHTML = storageItems.length;
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
        storagePrecio += descuentoCodigos;
        generarCardsDescuentos();
        generarCardsNumeros(storagePrecio);
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

/*******************************************************QUITAR ITEMS DEL CARRITO *********************************************************************/


