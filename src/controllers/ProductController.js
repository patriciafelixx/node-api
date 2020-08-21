const Product = require('../models/Product');
const { find } = require('../models/Product');

const ProductController = {
    index: async (req, res) => {
        const { page } = req.query;
        const products = await Product.paginate({}, { page, limit: 5 });
        return res.json(products);
    },
    store: async (req, res) => {
        const { title, description, url } = req.body;

        const product = await Product.create({
            title,
            description,
            url
        })
        return res.json(product);
    },
    show: async (req, res) => {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    update: async (req, res) => {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(product);
    },
    destroy: async (req, res) => {
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },
}

module.exports = ProductController;