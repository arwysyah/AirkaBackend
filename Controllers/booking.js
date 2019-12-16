
const Model = require('../Models/booking');
const form = require('../Helpers/resForm')
const date = new Date()
const dateNow = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()


module.exports = {

    bookingRoom: (req, res) => {
        //  const bodyReq = req.body;
        var date = new Date();
        const body = {
          ...req.body,
          start_date: date,
              
        };
        // console.log(body)
        Model
          .bookingRoom(body)
          .then(results => form.bookingRoom(res, results, 200))
          .catch(error => console.log(error));
      },
      getBooking: (req, res) => {
        const id = req.params.id;
        console.log(id);
        Model.getBooking(parseInt(id))
          .then(results => form.getBooking(res, results, 200))
          .catch(error => console.log(error));
      }
        }