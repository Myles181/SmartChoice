import * as fs from'fs';
import * as path from 'path';

function eAstroStoreProduct(text) {
  // If text is null return false
  if (!text) {
    return false;
  }

  // Get the absolute path of the json file and checks if it exists
  /* replace absPath with the absolute path of alliexpress.json on your device */
  const itemPath = '/root/SmartChoice/smartchoice/server_side/eAstroStore.json'

  console.log(fs.existsSync(itemPath));
  if (fs.existsSync(itemPath)) {
    const items = JSON.parse(fs.readFileSync(itemPath, 'utf-8'));
    const productInfo = {};
    let count = 0;

    for (let i = 0; i < items.length; i++) {
        if (new RegExp(text, 'i').test(items[i].name)){

            // Assign keys, values in productInfo
            productInfo[count] = {
            name: items[i].name,
            price: items[i].price,
            rating: items[i].rating,
            image: items[i].image,
            category: 'eAstroStore',
            link: 'https://www.google.com'
            };
            count++;
        }
      }
      return productInfo;
    }
    return {};
  }

export { eAstroStoreProduct };


// console.log(eAstroStoreProduct('iphone 12'))