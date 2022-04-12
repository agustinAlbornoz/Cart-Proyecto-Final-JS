/***********************************************       PRODUCTOS                ***********************************************************************/

fetch('./data.json')
.then((res) => res.json())
.then ( (data) => {
    let acumuladorDeCards = ``;
    data.forEach((elementoDelArray) => {
    acumuladorDeCards += `<div class="col-12 col-md-6 col-lg-4">
    <div class="card" style="width: 18rem;">
    <img src=${elementoDelArray.img} class="card-img-top" alt=${elementoDelArray.alt}>
    <div class="card-body" class="zoom-bg">
    <h5 class="card-title">${elementoDelArray.nombre}</h5>
    <p class="card-text">${elementoDelArray.descripcion}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Precio: $${elementoDelArray.precio}
    </li>
    <button id="btn-${elementoDelArray.id}" class="btn btn-primary" type="button" role="button" onclick="comprar(${elementoDelArray.id})">Comprar</button>
    </div>
</div>`;
});
mostrarCardsEnVenta(acumuladorDeCards);
    })


/***********************************************     FUNC COMPRAR               ***********************************************************************/

let carritoTotal = 0;
let itemsDentroCarrito = [];


const comprar = (idProducto) => {
    let findProducto = productosEnVenta.find(producto => producto.id === idProducto);
    comprarItemsBotones(findProducto.id);

} 

/*********************************************       CARDS TIENDA             ****************************************************************/




function mostrarCardsEnVenta(cards) {
    document.getElementById("cardsVenta").innerHTML = cards
};




 /* EJECUTAR BUSCADOR */
 /* MOSTRAR RESULTADO DE LA FUNCTION BUSCADOR */

