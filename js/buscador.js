/***********************************************     BUSCAR ITEM                ***********************************************************************/


resultado = '';
const filtrar = () => {

    const buscador = 'camisa de hombre';  /* PODES BUSCAR ITEMS DESDE ACA*/

    const texto = buscador.toLowerCase();


    for (let producto of productosEnVenta) {
        let nombres = producto.nombre.toLowerCase();
        if (nombres.indexOf(texto) !== -1) {
            resultado += `nombre: ${producto.nombre} Valor: $${producto.precio} stock: ${producto.stock} `;
        }
    }

    if (resultado === '') {
        resultado += 'No se encontro el producto';
    }
}

