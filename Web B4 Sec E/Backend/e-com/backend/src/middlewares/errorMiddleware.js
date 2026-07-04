export const errorMiddleware = (eror, req, res, next)=>{
    const message = eror.message || "Something went wrong!",
    const statuCode = err.status || 500;
    res.status(statuCode).json({
        message: message,
        success: false
    })
}

