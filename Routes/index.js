const express = require ('express')
const stay = require('./stay')
const User= require('./users')
const booking= require('./booking')
const history = require('./history')
// const borrow = require('./borrow')
// const wishlist = require('./wishlist')
// const postWishlist= require('./postWishlist')
const experience= require('./experience')
const Router = express.Router();

Router.use('/stay', stay)
Router.use('/experience',experience)
Router.use('/user',User)
Router.use('/booking',booking)
Router.use('/history',history)
// Router.use('/borrow',borrow)
// Router.use('/wishlists',wishlist)
// Router.use('/wishlist',postWishlist)


module.exports = Router // export Route