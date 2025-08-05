export const createProduct = async (req, res) => {
  try {
    res.json({
      message: "Product Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
