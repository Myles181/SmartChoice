import { alliexpressProduct } from '../server_side/alliexpress.js';
import { TokopediaProducts } from '../server_side/Tokopedia.js';
import { eAstroStoreProduct } from '../server_side/eAstroStore.js';


function getProducts(text) {
    let products = []; // Initialize an empty array to store products

    // Call functions and store the dictionaries in the products array
    const alliexpress = alliexpressProduct(text); // Assuming alliexpressProduct returns an array of dictionaries representing products from AliExpress
    const Tokopedia = TokopediaProducts(text); // Assuming TokopediaProducts returns an array of dictionaries representing products from Tokopedia
    const eAstroStore = eAstroStoreProduct(text);
    // Add the dictionaries from alliexpress to the products array
    for (let i = 0; i < Object.keys(alliexpress).length; ++i) {
        products.push(alliexpress[i]);
    }

    // Add the dictionaries from Tokopedia to the products array
    for (let j = 0; j < Object.keys(Tokopedia).length; ++j) {
        products.push(Tokopedia[j]);
    }

    for (let j = 0; j < Object.keys(eAstroStore).length; ++j) {
        products.push(eAstroStore[j]);
    }
    return products; // Return the combined list of dictionaries representing products
}


export { getProducts };


// console.log(getProducts('iphone x'));