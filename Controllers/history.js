const Model = require("../Models/history");
const form = require("../Helpers/resForm");

module.exports = {
  getHistory: (req, res) => {
    const id = req.params.id;
    console.log(id);
    Model.getHistory(parseInt(id))
      .then(results => form.getHistory(res, results, 200))
      .catch(error => console.log(error));
  }
};
