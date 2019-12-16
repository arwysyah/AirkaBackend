
const Model = require('../Models/postWishlist');
const form = require('../Helpers/resForm')

module.exports = {

    postWishlist: (req, res) => {
        //  const bodyReq = req.body;
      
        const body = {
          ...req.body,
         
              
        };
        // console.log(body)
        Model
          .postWishlist(body)
          .then(results => form.postWishlist(res, results, 200))
          .catch(error => console.log(error));
      }
        }