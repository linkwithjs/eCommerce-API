const express = require('express');
const router = express.Router();
const cartController = require('./cart.controller');

// route for cart controller

router.route('/')
        .get(cartController.getCartList)
        .post(cartController.createCart);

router.route('/:id')
        .get(cartController.getCartById)
        .put(cartController.updateCart)
        .delete(cartController.deleteCart)

// endpoint for getting product and user data cart id
router.route('/product-user/:id')
        .get(cartController.getProductUserById)
       

module.exports = router;