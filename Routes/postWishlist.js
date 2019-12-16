const {postWishlist} = require ('../Controllers/postWishlist')
const express = require ('express');
const router = express.Router() // manggil router


router.post('/',postWishlist)
module.exports = router