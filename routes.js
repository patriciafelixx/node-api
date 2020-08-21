const express = require('express');
const routes = express.Router();

const ProductController = require('./src/controllers/ProductController');

routes.get('/', ProductController.index);
routes.post('/', ProductController.store);

routes.get('/:id', ProductController.show);
routes.put('/:id', ProductController.update);
routes.delete('/:id', ProductController.destroy);

module.exports = routes;