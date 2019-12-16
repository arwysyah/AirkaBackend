const {getHistory} = require ('../Controllers/history')
const express = require ('express');
const router = express.Router() // manggil router


router.get('/:id',getHistory)
module.exports = router