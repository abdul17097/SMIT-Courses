export const errorMiddleware = (error, req, res, next) => {
  const message = error?.message || "Something went wrong!";
  const statuCode = error?.status || 500;
  res.status(statuCode).json({
    message: message,
    success: false,
  });
};
