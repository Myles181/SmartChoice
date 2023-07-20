import { alliexpressProduct } from '../app/alliexpress.js';
import { TokopediaProducts } from '../app/Tokopedia.js';


function getProducts(text) {
    let products = {}
    // Call functions and attach to products
    products["alliexpress"] = alliexpressProduct(text);
    products["Tokopedia"] = TokopediaProducts(text);

    return products;
}

console.log(getProducts("iPhone X"));