import express from "express"
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/productController"
const productRoutes = express.Router()

productRoutes.get("/products", getProducts)
productRoutes.get("/products/:id", getProductById)
productRoutes.post("/products", createProduct)
productRoutes.patch("/products/:id", updateProduct)
productRoutes.delete("/products/:id", deleteProduct)

export default productRoutes
