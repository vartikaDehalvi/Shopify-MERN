import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import {
	getProducts,
	getProductById,
} from '../controllers/productController.js';

const router = express.Router();

/*
.route() is used to specify a common base path for a group of routes. 

Chain HTTP Methods: After defining the base path, you can chain HTTP methods to this route using methods like .get(), .post(), .put(), .delete(), etc. 
Each chained method corresponds to a specific HTTP request method.
eg:
router.route('/api/products')
  .get((req, res) => {
    // Handle GET request for /api/products
  })
  .post((req, res) => {
    // Handle POST request for /api/products
  });

*/
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export { router as productRouter };
