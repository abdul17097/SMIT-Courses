import { Product } from "../models/product.js";
import cloudinary from "../config/cloudinary.js";

export const createProduct = async (req, res) => {
  try {
    const { title, description, price, category, stock } = req.body;

    if (!title || !price || !category || !stock) {
      return res.status(400).json({
        message: "Please fill all fields",
        success: false,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Required image file",
        success: false,
      });
    }

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "Ecommerce",
          allowed_formats: ["jpeg", "png", "jpg"],
        },
        (error, result) => {
          if (error) return reject(error);
          return resolve(result);
        }
      );
      uploadStream.end(req.file?.buffer);
    });

    const newProduct = new Product({
      title,
      description,
      price,
      imageUrl: result.secure_url,
      category,
      stock,
    });

    await newProduct.save();

    res.status(201).json({
      message: "Product Added Successfully",
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const productDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await Product.findById({ _id: id });
    if (!findProduct) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }

    res.status(201).json({
      message: "Product Details",
      data: findProduct,
      success: true,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await Product.findById({ _id: id });
    if (!findProduct) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }

    await Product.deleteOne({
      _id: id,
    });

    res.status(201).json({
      message: "Product Deleted Successfully",
      success: true,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

// const getProducts = async (req, res) => {
//   try {
//     const {
//       search, // e.g. "iphone"
//       category, // e.g. "Electronics"
//       minPrice, // e.g. 50
//       maxPrice, // e.g. 500
//       sortBy, // e.g. "price"
//       sortOrder, // "asc" or "desc"
//       page = 1,
//       limit = 10,
//     } = req.query;

//     const pipeline = [];

//     // Search by title or description
//     if (search) {
//       pipeline.push({
//         $match: {
//           $or: [
//             { title: { $regex: search, $options: "i" } },
//             { description: { $regex: search, $options: "i" } },
//           ],
//         },
//       });
//     }

//     // Filter by category
//     if (category) {
//       pipeline.push({
//         $match: { category: category },
//       });
//     }

//     // Filter by price range
//     if (minPrice || maxPrice) {
//       pipeline.push({
//         $match: {
//           price: {
//             ...(minPrice ? { $gte: Number(minPrice) } : {}),
//             ...(maxPrice ? { $lte: Number(maxPrice) } : {}),
//           },
//         },
//       });
//     }

//     // Sorting
//     if (sortBy) {
//       pipeline.push({
//         $sort: { [sortBy]: sortOrder === "desc" ? -1 : 1 },
//       });
//     } else {
//       pipeline.push({ $sort: { createdAt: -1 } }); // Default: newest first
//     }

//     // Pagination
//     const skip = (Number(page) - 1) * Number(limit);
//     pipeline.push({ $skip: skip });
//     pipeline.push({ $limit: Number(limit) });

//     // Execute aggregation
//     const products = await Product.aggregate(pipeline);

//     //  Count total (without pagination)
//     const total = await Product.countDocuments();

//     res.json({
//       success: true,
//       total,
//       page: Number(page),
//       limit: Number(limit),
//       products,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };
