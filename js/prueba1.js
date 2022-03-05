const clothes1 = {
    id: '1',
    name:'Camisa de hombre',
    price:1500,
    stock: 2,
}
const clothes2 = {
    id: '2',
    name: 'buzo de hombre 1',
    price: 1200,
    stock: 0,
}

const clothes3 = {
    id: '3',
    name: 'buzo de hombre 2',
    price: 1700,
    stock: 3,
}

const clothes4 = {
    id: '4',
    name:'bermuda de hombre',
    price: 2000,
    stock: 5,
}

let buy;
let cart= 0;

function stockControl(parametro){
    if(parametro.stock === 0){
        parametro.price = 0;
        alert(`The product ${parametro.name} dont have stock in this moment`)
    }
    else{
        alert(`The product ${parametro.name} was added to the cart`)
    }
}

do{
const addToCart=prompt(`
    select the product who you wish between the values 1 and 4
    1. ${clothes1.name}   valor  $${clothes1.price}
    2. ${clothes2.name}   valor  $${clothes2.price}
    3. ${clothes3.name}   valor  $${clothes3.price}
    4. ${clothes4.name}   valor  $${clothes4.price}
    If you want to check the stock of the products,
    use the corresponding numbers of the clothes and followed by a point
    Example:" 1." `)

    switch(addToCart){
        case '1':
            stockControl(clothes1)
            cart+=clothes1.price;
            break;
        case '1.':
            alert(`At this moment we have ${clothes1.stock} in stock`)
            break;
        case '2':
            stockControl(clothes2)
            cart+=clothes2.price;
            break;
        case '2.':
            alert(`At this moment we have ${clothes2.stock} in stock`)
            break;
        case '3':
            stockControl(clothes3)
            cart+=clothes3.price;
            break;
        case '3.':
            alert(`At this moment we have ${prenda3.stock} in stock`)
            break;
        case '4':
            stockControl(clothes4)
            cart+=clothes4.price;
            break;
        case '4.':
            alert(`At this moment we have ${clothes4.stock} in stock`)
            break;
        default: 
            alert('You dont know what is 1 and 4?')
            break;
    }
    buy=prompt("If you wish take more products write YES; if you want to finish this purchase write NO") 
}while(buy !=="NO")
alert("Your totally purchase is  $ "+cart)
