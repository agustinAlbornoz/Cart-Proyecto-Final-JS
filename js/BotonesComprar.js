
 /***********************************************     FUNCION COMPRAR                ***********************************************************************/




const comprarItemsBotones = (parametro) => {
    if(productosEnVenta[parametro].stock > 0){
        carritoTotal+=productosEnVenta[parametro].precio;
        productosEnVenta[parametro].stock -= 1;
        itemsDentroCarrito.push(productosEnVenta[parametro]);
        Swal.fire(
            `El producto ${productosEnVenta[parametro].nombre}`,
            'fue agregado correctamente al carrito',
            'success')
    }else if(productosEnVenta[parametro].stock === 0){
        document.getElementById(`btn-${parametro}`).innerHTML =
        ` <button class="btn btn-primary" type="button" role="button" id="btn-0" onclick="comprar(0)" disable>Sin stock</button>
        ` 
    Swal.fire(
        `El producto ${productosEnVenta[parametro].nombre}`,
        'no pudo ser agregado por falta de stock, lo sentimos',
        'error')
    };
    storage();
    generarCards(storageItems); //GENERA CARDS DE ITEMS COMPRADOS
    generarCardsNumeros(carritoTotal);//GENERA PRECIO FINAL DE LOS PRODUCTOS COMPRADOS
    mostrarTotalItems(); //GENERA NUMERO DE ITEMS EN CARRITO

}; // FUNCIONA PERFECTO


let storage = () => {
    localStorage.setItem('keyItems', JSON.stringify(itemsDentroCarrito));
    localStorage.setItem('keyPrecio', JSON.stringify(carritoTotal));
}
/*************************************************************************************************************/


const carritoLocal = JSON.parse(localStorage.getItem('keyItems')) || [];
console.log(carritoLocal);  // Probar si se suman correctamente los items

