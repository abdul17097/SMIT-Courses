export const newProduct = async (req, res) => {
  try {
    if (!req.body.title) {
      return res.json({
        success: false,
        message: "Title is required",
      });
    }
    res.json({
      success: true,
      message: "Product added successfully",
      data: req.body,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to add product",
      error: error.message,
    });
  }
};
