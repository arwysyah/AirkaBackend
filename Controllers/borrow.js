const Model = require("../Models/borrow");
const form = require("../Helpers/resForm");
const date = new Date();
const dateNow =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

module.exports = {
  postBorrow: (req, res) => {
    //  const bodyReq = req.body;
    var date = new Date();
    const body = {
      ...req.body,
      borrow_at: date
    };
    // console.log(body)
    Model.postBorrow(body)
      .then(results => form.postBorrow(res, results, 200))
      .catch(error => console.log(error));
  }
};
