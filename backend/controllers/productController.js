import asyncHandler from '../middleware/asyncHandler';
import { ProductModel } from '../models/productModel';

//@route GET /api/products
//@access Public
//FETCH ALL PRODUCTS
export const getProducts = asyncHandler(async (req, res) => {
	const products = await ProductModel.find({});
	res.json(products);
});

//@route GET /api/products/:id
//@access Public
//FETCH A SINGLE PRODUCTS
export const getProductById = asyncHandler(async (req, res) => {
	const product = await ProductModel.findById(req.params.id);
	if (product) {
		return res.json(product);
	} else {
		res.status(404);
		throw new Error('Resource Not Found');
	}
});
