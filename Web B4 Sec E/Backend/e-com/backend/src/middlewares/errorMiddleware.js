export const errorMiddleware = (error, req, res, next) => {
  const statusCode = error?.statusCode || error?.status || 500;
  const message = error?.message || "Something went wrong!";

  res.status(statusCode).json({
    success: false,
    message,
  });
};


