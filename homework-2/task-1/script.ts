interface Goods {
    name : string,
    price : number,
    availability : boolean,
    manufacturer? : string,
    country? : string
}

function renderGoods (goods : Goods) : string {
    return JSON.stringify(goods);
}

const goods_1 : Goods = {
    name: 'Iphone16',
    price: 1600,
    availability: true,
    manufacturer: 'Apple',
    country: 'USA'
}

const goods_2 : Goods = {
    name: 'Microwave',
    price: 450,
    availability: true
}

console.log(typeof renderGoods(goods_1), renderGoods(goods_1));
console.log(typeof renderGoods(goods_2), renderGoods(goods_2));
console.log('-----------');





function renderProduct(product : { name : string, price : number, availability : boolean, manufacturer? : string, country? : string }) : string {
    return JSON.stringify(product);
}

const product_1 : { name : string, price : number, availability : boolean, manufacturer : string, country : string } = {
    name: 'Screen',
    price: 600,
    availability: true,
    manufacturer: 'Samsung',
    country: 'Korea'
}
console.log(typeof renderProduct(product_1), renderProduct(product_1));
console.log('-----------');







type Product = { name : string, price : number, availability : boolean, manufacturer? : string, country? : string };

function renderProduct2 (product : Product) : string {
    return JSON.stringify(product);
}
const product_2: Product = {
    name: 'Headphones',
    price: 200,
    availability: true,
    manufacturer: 'Xiaomi',
    country: 'China'
}

console.log(typeof renderProduct2(product_2), renderProduct2(product_2));
console.log('-----------');