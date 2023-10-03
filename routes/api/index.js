const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

//http://localhost:3001/categories 
router.use('/categories', categoryRoutes);

//http://localhost:3001/product
router.use('/products', productRoutes);

//http://localhost:3001/tags 
router.use('/tags', tagRoutes);

module.exports = router;
