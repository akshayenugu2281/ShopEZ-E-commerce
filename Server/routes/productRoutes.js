const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct } = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

// Route to get all products AND create a new product (Admin only)
router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct);

// Route to get a single product by its ID
router.route('/:id')
    .get(getProductById);

module.exports = router;