const {bookingRoom,getBooking} = require ('../Controllers/booking')
const express = require ('express');
const router = express.Router() // manggil router


router.post('/',bookingRoom)
router.get('/:id',getBooking)
module.exports = router