//Used to simplify error handling

/*By using asyncHandler, you don't need to explicitly wrap your asynchronous route handlers with try...catch blocks.
 Any errors that occur in the route handler will automatically be caught and passed to your error handling middleware.
 This simplifies error handling in your Express application and makes your code cleaner and more readable. */

const asyncHandler = (fn) => (req, res, next) => {
	/*It takes the result of calling fn(req, res, next)
     (which is the execution of the route handler function)
      and wraps that result in a Promise. */

	/*If your route handler is asynchronous and returns a Promise,
       Promise.resolve effectively does nothing. But if your route handler is synchronous and returns a regular value,
       Promise.resolve turns it into a resolved Promise. */

	/*.catch(next) is used to catch any errors that might occur in the asynchronous fn function.
      If an error occurs, it skips to the catch block and calls next(error) */
	Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
