import * as fs from "fs";
import * as path from "path";

function alliexpressProduct(text) {
  // If text is null return false
  if (!text) {
    return false;
  }

  // Get the absolute path of the json file and checks if it exists
  // const itemPath = path.join("/home/myles/nodeProject/app/alliexpress.json");

  const itemPath = path.join(
    "C:/Users/user/Desktop/1.coding_datascience/ALX/portfolio_project/SmartChoice/smartchoice/server_side/alliexpress.json"
  );

  if (fs.existsSync(itemPath)) {
    const items = JSON.parse(fs.readFileSync(itemPath, "utf-8"));

    const productInfo = {};
    let count = 0;

    for (let i = 0; i < items.length; i++) {
      const description = items[i].title.displayTitle;

      // Check if text exists inside items and assign it's proper data to it
      if (new RegExp(text, "i").test(description)) {
        const txt = `.*? ${text} \\w+`;
        const product_name = description.match(new RegExp(txt, "i"));
        var camera_info = description.match(/\w(.)?\wMP Camera/i);
        var RAM = description.match(/\w+ RAM/i);
        var ROM = description.match(/(8|16|32|64)GB/i);
        const Rating = () => {
          if (items[i].evaluation === undefined) {
            return 0;
          } else {
            return items[i].evaluation.starRating;
          }
        };

        const Price = items[i].prices.salePrice.formattedPrice;
        const Image = items[i].image.imgUrl;

        if (camera_info === null) {
          camera_info = ["2.0MP"];
        }
        if (RAM === null) {
          RAM = ["2GB RAM"];
        }
        if (ROM === null) {
          ROM = "8GB";
        }

        // Assign keys, values in productInfo
        productInfo[count] = {
          Name: product_name,
          Camera: camera_info[0],
          RAM: RAM[0],
          ROM: `${ROM} ROM`,
          ratings: Rating(),
          price: Price,
          image: Image,
        };
        count++;
      }
    }

    return productInfo;
  }

  return {}; // Return {} if nothing found
}

/** const product = getProduct('iphone 13');
console.log(product);*/
export { alliexpressProduct };

console.log(alliexpressProduct("iphone 5C"));
