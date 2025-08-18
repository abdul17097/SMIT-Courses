export const errorHandlingMiddleware = (error, req, res, next) => {
  error.message = error.message || "Something went wrong";
  error.statusCode = error.statusCode || 500;

  res.status(error.statusCode).json({
    message: error.message,
    success: false,
  });
};
