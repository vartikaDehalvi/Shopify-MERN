//seeder.js file for importing sample data

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import { users } from './api/users.js';
import products from './api/products.js';
import { UserModel } from './models/userModel.js';
import { ProductModel } from './models/productModel.js';
import { OrderModel } from './models/orderModel.js';

import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await OrderModel.deleteMany(); // delete to avoid duplicates at each run
		await ProductModel.deleteMany();
		await UserModel.deleteMany();

		// Insert sample users into the UserModel
		const createdUsers = await UserModel.insertMany(users);

		// Get the _id of the first user created (assuming it's the admin)
		const adminUser = createdUsers[0]._id;

		// Map over the products and add the adminUser as the owner
		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});

		// Insert the sampleProducts into the ProductModel
		await ProductModel.insertMany(sampleProducts);

		console.log('Data Imported!'.green.inverse);
		process.exit();
	} catch (error) {
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};
const destroyData = async () => {
	try {
		await OrderModel.deleteMany();
		await ProductModel.deleteMany();
		await UserModel.deleteMany();

		console.log('Data Destroyed!'.yellow.inverse);
		process.exit();
	} catch (error) {
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
