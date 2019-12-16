
const Model = require('../Models/wishlist');
const form = require('../Helpers/resForm')

module.exports = {

    getWishlist:(req,res)=>{
            const id = req.params.id
            console.log(id)
            Model.getWishlist(parseInt(id))
                .then(results=>form.getWishlist(res,results,200))
                .catch(error=> console.log(error))
    
},
deleteWishlist : (req,res)=>{
    const id_book = req.query.id_book
    const id_user=req.query.id_user
    Model.deleteWishlist(id_book,id_user)
    .then(id1=> form.deleteWishlist(res,id1,200))
    .catch(error=> console.log(error))
        }
    }