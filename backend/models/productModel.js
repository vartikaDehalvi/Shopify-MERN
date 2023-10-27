import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		name: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
		comment: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const productSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User', //Referencing to another model
		},

		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		reviews: [reviewSchema], //Embedding a schema in reviews
		rating: {
			type: Number,
			required: true,
			default: 0,
		},
		numReviews: {
			type: Number,
			required: true,
			default: 0,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		countInStock: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

export const ProductModel = mongoose.model('Product', productSchema);

/* 1. Embedding: Embedding ensures data consistency because related data is stored within the same document.
   If you update the document, all related data is updated together.
   Embedding is suitable when the related data (e.g., reviews in a product) is relatively small and doesn't change frequently.
   It simplifies queries because you can retrieve all related data in a single query.

   2.Referencing: Referencing relies on maintaining references to other documents. 
   Ensuring data consistency might require more effort, such as updating all references when related data changes.
   Referencing separates related data into different collections.
   This is beneficial when you have large amounts of related data or when the related data is frequently updated.
   It allows for more flexible querying but may require multiple queries to retrieve related data.
   */
