const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');

// Routes
router.post('/', auth, productController.createProduct); // create product
router.get('/', productController.getAllProducts);        // get all
router.get('/:id', productController.getProductById);     // get one
router.put('/:id', auth, productController.updateProduct); // update
router.delete('/:id', auth, productController.deleteProduct); // delete

module.exports = router;
