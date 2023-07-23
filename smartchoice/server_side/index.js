import express from "express";
import { getProducts } from "../server_side/base.js";
// import { alliexpressProduct } from "../server_side/alliexpress.js"
import dotenv from "dotenv";
import cors from 'cors';


dotenv.config();

const app = express();
const host = process.env.HOST;
const port = process.env.PORT;

app.use(cors());
app.use(express.json()); // Add this middleware to handle JSON data

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post('/product', function (req, res) {
    if (req.method !== 'POST') {
        throw new Error('Invalid request method');
    }

    // Assuming the request body is in the format {"request": [{"product": "Product 1"}, {"product": "Product 2"}, ...]}
    const response =getProducts(req.body.searchInput);

    res.status(200).json({
        'success': '200',
        'response': response
        }
    )
});

app.listen(port, function () {
  console.log(`Example app listening on port ${host}:${port}`);
});
