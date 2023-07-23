import * as fs from'fs';
import * as path from 'path';

function alliexpressProduct(text) {
  // If text is null return false
  if (!text) {
    return false;
  }

  // Get the absolute path of the json file and checks if it exists
  /* replace absPath with the absolute path of alliexpress.json on your device */
  const absPath = '/root/SmartChoice/smartchoice/server_side/alliexpress.json'
  const itemPath = path.join(absPath);

  if (fs.existsSync(itemPath)) {
    const items = JSON.parse(fs.readFileSync(itemPath, 'utf-8'));

    const productInfo = {};
    let count = 0;

    for (let i = 0; i < items.length; i++) {
      const description = items[i].title.displayTitle;

      // Check if text exists inside items and assign it's proper data to it
      if (new RegExp(text, 'i').test(description)) {
        const txt = `.*? ${text} \\w+`;
        const product_name = description.match(new RegExp(txt, 'i'));
        const Rating = () => {
          if (items[i].evaluation === undefined) {
            return 0;
          }else {
            return items[i].evaluation.starRating;
          }
        }
        
        const Price = items[i].prices.salePrice.formattedPrice;
        const Image = items[i].image.imgUrl

        // Assign keys, values in productInfo
        productInfo[count] = {
          name: product_name,
          price: Price,
          rating: Rating(),
          image: Image,
          category: 'alliexpress',
          link: 'https://www.google.com'
        };
        count++;
      }
      }
      return productInfo;
    }
    return {}
  }

export { alliexpressProduct }
