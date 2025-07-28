const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// CRUD Endpoints
router.get('/', getAllProducts);            // Get all products (with search & pagination)
router.get('/:id', getProductById);         // Get product by ID
router.post('/', createProduct);            // Create a new product
router.put('/:id', updateProduct);          // Update product by ID
router.delete('/:id', deleteProduct);       // Delete product by ID

module.exports = router;