//Using express 
import { error } from "console";
import express from "express";
import dotenv from "dotenv";
import { alliexpressProduct } from alliexpress;
import { TokopediaProducts } from Tokopedia;

// Configure dotenv
dotenv.config();

// Use the environment variables
const host = process.env.HOST;
const port = process.env.PORT;

const app = express();
app.use(express.json()); // To pass json encoded bodies 
app.use(express.urlencoded()); // Pass url encoded bodies

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});


// Hello world!
app.get('/', (req, res) => {
    res.send({message: "Hello world!"});
})

// Takes in searched product
app.post('/product', (req, res) => {
    
    if (req.method !== 'POST') {
        throw new Error('Invalid request method');
    }
    
    // Product Search receives a dictionary format {"response": "{product}"}
    const product = req.body;

    // use the fucntion to retrieve response
    // Response is a list of dictionaries
    const response = getProduct(product);

    return res.send(response);
});

app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
})