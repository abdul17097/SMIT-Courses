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

export const getProducts = async (req, res) => {
  try {
    const {
      search,
      category,
      minPrice,
      maxPrice,
      sortedBy,
      sortedOrder,
      page = 1,
      limit = 2,
    } = req.query;

    // const products = await Product.find();
    const pipeline = [];

    if (search) {
      pipeline.push({
        $match: {
          $or: [
            { title: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
          ],
        },
      });
    }

    if (category) {
      pipeline.push({
        $match: { category: category },
      });
    }

    if (minPrice || maxPrice) {
      pipeline.push({
        $match: {
          price: {
            ...(minPrice ? { $gte: Number(minPrice) } : {}),
            ...(maxPrice ? { $lte: Number(maxPrice) } : {}),
          },
        },
      });
    }

    if (sortedBy) {
      pipeline.push({
        $sort: { [sortedBy]: sortedOrder === "desc" ? -1 : 1 },
      });
    }

    const skip = (Number(page) - 1) * Number(limit);
    pipeline.push({ $skip: skip });
    pipeline.push({ $limit: Number(limit) });

    const products = await Product.aggregate(pipeline);

    res.json({
      success: true,
      products,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

// server.js
// require('dotenv').config();
// const express = require('express');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const app = express();

// app.use(express.json()); // Middleware to parse JSON bodies

// // Route to create a PaymentIntent
// app.post('/create-payment-intent', async (req, res) => {
//   const { amount } = req.body;

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: 'usd',
//       // Other optional parameters like description, customer, etc.
//     });

//     res.status(200).send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
