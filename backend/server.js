import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import products from './api/products.js';
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('API running...');
});

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id); //if the current id matches the id in url
	res.json(product);
});

app.listen(PORT, () => console.log('Connected to port ' + PORT));
