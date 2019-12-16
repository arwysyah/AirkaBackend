const {getWishlist,deleteWishlist} = require ('../Controllers/wishlist')
const express = require ('express');
const router = express.Router() // manggil router


router.get('/:id',getWishlist)
router.delete('/',deleteWishlist)
module.exports = router