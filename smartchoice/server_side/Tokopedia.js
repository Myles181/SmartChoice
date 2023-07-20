import fs from 'fs';
import path from 'path';
import util from 'util';
const readFile = util.promisify(fs.readFile);

function TokopediaProducts(text) {
  if (!text) {
    return false;
  }

  // Return a dictionary of key index and value products
  const productInfo = {};
  let count = 0;

  // Retrieve data
  const itemPath = path.join('/home/myles/nodeProject/app/TokopediaApi.json');
  if (fs.existsSync(itemPath)) {
    const data = JSON.parse(fs.readFileSync(itemPath, 'utf-8')).results;

  // Find Product with regex
  for (let i = 0; i < data.length; i++) {
    const regex = new RegExp(text, 'i');
    if (regex.test(data[i].title)) {
      const product_name = (data[i].title.match(new RegExp(/^(.*?)-/))[0]).replace('-', '');
      const image = data[i].image;
      const rating = data[i].rating;
      const price = data[i].price.replace(/\./g, '');
      const new_price = (parseFloat(price.match(/\d+/)[0]) * 0.000066).toFixed(1);
      const new_price_formatted = `USD ${new_price}`;
      const link = data[i].link;

      productInfo[count] = {
        name: product_name,
        price: new_price_formatted,
        rating: rating,
        image: image,
        link: link
      };

      count++;
    }
  }

  return productInfo;
}
}

/**getTokopediaProducts('Iphone 13')
  .then((productInfo) => console.log(productInfo))
  .catch((error) => console.log(error));
*/
export { TokopediaProducts };