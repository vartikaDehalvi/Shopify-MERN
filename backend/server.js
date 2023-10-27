import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
import cors from 'cors';
import express from 'express';
import { productRouter } from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const PORT = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('API running...');
});

app.use('/api/products', productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log('Connected to port ' + PORT));
