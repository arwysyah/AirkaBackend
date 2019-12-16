const {postBorrow} = require ('../Controllers/borrow')
const express = require ('express');
const router = express.Router() // manggil router


router.post('/',postBorrow)
module.exports = router