/***********************************************       PRODUCTOS                ***********************************************************************/
let productosEnVenta = [
    { id: 0,
    nombre: 'CAMISA LIVIANA',
    genero: 'Hombre',
    precio: 1500,
    stock: 2,
    descripcion: 'Prenda manga larga con detalles de lineas verticales.',
    img:'img/hombres/hombrecamisa.webp',
    alt:'hombre camisa'},
    { id: 1,
    nombre: 'BUZO PASTEL',
    genero: 'Hombre',
    precio: 2500,
    stock: 5,
    descripcion: 'Prenda de cuello rodondo con estampado frontal.',
    img:'img/hombres/hombrebuzo2.jpg',
    alt:'buzo de hombre'},
    { id: 2,
    nombre: 'BUZO URBANO',
    genero: 'Hombre',
    precio: 1700,
    stock: 0,
    descripcion: 'Prenda gris topo de cuello redondo.',
    img:'img/hombres/hombrebuzo.jpg',
    alt:'buzo de hombre' },
    { id: 3,
    nombre: 'CHALECO',
    genero: 'Hombre',
    precio: 2000,
    stock: 8,
    descripcion: 'Prenda azul marino sin mangas. <br><br><br>',
    img:'img/hombres/hombrebermuda.jpg',
    alt:'Chaleco de hombre' },
    { id: 4,
    nombre: 'CAMISA FORMAL',
    genero: 'Hombre',
    precio: 2300,
    stock: 6,
    descripcion: 'Prenda clasica blanca de mangas largas. <br> <br>',
    img: 'img/hombres/hombrecamisa2.jpg',
    alt: 'hombre camisa'},
    { id: 5,
    nombre: 'CHOMBA',
    genero: 'Hombre',
    precio: 3000,
    stock: 4,
    descripcion: 'Prenda veraniega color mango. <br> <br> <br>',
    img: 'img/hombres/hombreremera.jpg',
    alt: 'chomba de hombre'},
    /**Comienza MUJERES **/
    {   id: 6,
        nombre: 'JARDINERO MODA',
        genero: 'Mujer',
        precio: 4000,
        stock:1,
        descripcion: 'Prenda enteriza color beige. <br> <br> <br>',
        img: 'img/mujer/mujermono.jpg',
        alt: 'Jardinero de mujer'},
    {   id: 7,
        nombre: 'CONJUNTO URBANO',
        genero: 'Mujer',
        precio: 6000,
        stock:10,
        descripcion:'Combo de invierno que incluye polera con buzo estampado y pantalones largos. <br>',
        img: 'img/mujer/mujerbuzo.jpg',
        alt: 'buzo de mujer'},
    {   id: 8,
        nombre: 'TAPADO CORTO',
        genero: 'Mujer',
        precio: 2000,
        stock: 22,
        descripcion: 'Prenda de color azul petroleo de invierno. <br> <br>',
        img: 'img/mujer/mujerabrigo.jpg',
        alt: 'abrigo de mujer'},
    {   id: 9,
        nombre: 'CONJUNTO SEDA',
        genero: 'Mujer',
        precio: 4000,
        stock: 14,
        descripcion: 'Combo color crema, que incluye remera lisa, camisa manga corta y pantalón chino.',
        img: 'img/mujer/mujercamisa.jpg',
        alt: 'camisa de mujer'},
    {   id: 10,
        nombre: 'REMERA ABUCHADA',
        genero: 'Mujer',
        precio: 1200,
        stock:8,
        descripcion: 'Prenda color gris topo con cuello V ajustable en la cintura. <br> <br>',
        img: 'img/mujer/mujerremera.jpg',
        alt: 'remera de mujer' },
    {   id: 11,
        nombre: 'SWEATER',
        genero: 'Mujer',
        precio: 1700,
        stock: 88,
        descripcion: 'Prenda color mostaza con cuello tortuga. <br> <br>',
        img: 'img/mujer/mujersweater.jpg',
        alt: 'sweater de mujer'}
];


/***********************************************     FUNC COMPRAR               ***********************************************************************/

let carritoTotal = 0;
let itemsDentroCarrito = [];


const comprar = (idProducto) => {
    let findProducto = productosEnVenta.find(producto => producto.id === idProducto);
    comprarItemsBotones(findProducto.id);

} 

/*********************************************       CARDS TIENDA             ****************************************************************/


generarCardsVenta(productosEnVenta);

function generarCardsVenta(productosEnVenta) {
    let acumuladorDeCards = ``;
    productosEnVenta.forEach((elementoDelArray) => {
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

}

function mostrarCardsEnVenta(cards) {
    document.getElementById("cardsVenta").innerHTML = cards
};




 /* EJECUTAR BUSCADOR */
 /* MOSTRAR RESULTADO DE LA FUNCTION BUSCADOR */

