const express = require('express');
const { uploadProduct, getAllProducts } = require('../controller/ProductController');

const router = express.Router();
router.post('/upload/:userId', uploadProduct);
router.get('/getall', getAllProducts);

module.exports = router;