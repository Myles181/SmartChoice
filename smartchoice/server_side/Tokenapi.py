#!/usr/bin/python3

import os
import json
import re

def getTokopediaProducts(text=None):
    if text == None:
        return false

    # Return a dictionary of key index and value products
    productInfo = {}

    count = 0

    # Retrieve data
    path = os.path.abspath('/home/myles/apis/TokopediaApi.json') #Input path
    with open(path, 'r') as f:
        data = json.loads(f.read())

    data = data['results']
    # Find Product with regex
    for i in range(len(data)):
        p = re.compile(text, flags=re.IGNORECASE)
        if p.search(data[i]['title']) != None:
            p = re.compile(r'.*' + text + '\w+', flags=re.IGNORECASE)
            product_name = p.search(data[i]['title']).group()
            image = data[i]['image']
            rating = data[i]['rating']
            price = (data[i]['price']).replace('.', '')
            new_price = float(re.search(r'\d+', price).group())
            new_price = f"{new_price * 0.000066:.1f}"
            new_price = f"USD ${new_price}"""
            link = data[i]['link']
            productInfo[count] = {
                    "name": product_name,
                    "price": new_price,
                    "rating": rating,
                    "image": image,
                    "link": link
                    }
            count += 1

    return productInfo


print(getTokopediaProducts('Iphone 13'))
