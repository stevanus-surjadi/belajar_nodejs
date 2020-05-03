const Product = require('../models/product');

exports.getAddProducts = (req,res,next) => {
    res.render('admin/add-product', {
            pageTitle:'Add product', 
            path:'/admin/add-product',
            formCSS: true,
            productCSS: true,
            activeAddProduct: true

        });
    };

exports.postAddProducts = (req,res,next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
    }

exports.getProducts = (req,res,next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products, 
            pageTitle: 'Admin Products', 
            path:"/admin/products", 

    
        });
    });
    
}