import mongoose from "mongoose";
import Product from "../model/Product";

export const getAllProducts = async (req, res, next) => {
  let products;
  try {
    const { category } = req.body;
    // console.log(category);
    if (category) {
      products = await Product.find({ category });
    } else {
      products = await Product.find();
    }
    // console.log(products.length);
  } catch (err) {
    console.log(err);
  }

  if (!products) {
    return res.status(404).json({ message: "No products found." });
  }
  return res.status(200).json({ products });
};

export const getById = async (req, res, next) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "No product found!" });
    }
    return res.status(200).json({ product });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
