export const notFound = (req, res, next) => {
	const error = new Error(`${req.originalUrl} not found`);
	res.status(404);
	next(error); //call the next middleware passing in the error
};

//Any throw new Error() is handled by the errorHandler middleware
//i.e. It gets the error from anywhere not just the notFound middleware
export const errorHandler = (error, req, res, next) => {
	let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	let message = error.message;

	//Check for Mongoose bad ObjectId
	if (error.name === 'CastError' && error.kind === 'ObjectId') {
		message = `Resource not found: ${error.name}`;
		statusCode = 404;
	}

	res.status(statusCode).json({
		message,
		stack: process.env.NODE_ENV === 'production' ? '📚' : error.stack,
	});
};
