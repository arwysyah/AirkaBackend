const Model = require('../Models/stay');
const form = require('../Helpers/resForm')
module.exports = {

    getAll : (req,res) =>{
        Model.getAll() 
        .then(status1 => form.getAll(res,status1,200))//langsung diubah ke JSON
        .catch(error => console.log(error))
    },
    getLimit : (req,res) =>{
        Model.getLimit() 
        .then(status1 => form.getLimit(res,status1,200))//langsung diubah ke JSON
        .catch(error => console.log(error))
    },
    filterLocation: (req, res) => {
        const location = req.params.location;
        Model.filterLocation(location)
          .then(location1 => form.filterLocation(res, location1, 200)) //langsung diubah ke JSON
          .catch(error => console.log(error));
      },
    // getGenre : (req,res) =>{
    //     Model.getGenre() 
    //     .then(status1 => form.getGenre(res,status1,200))//langsung diubah ke JSON
    //     .catch(error => console.log(error))
    // },

    // getStatus : (req,res) =>{
    //     Model.getStatus() 
    //     .then(status1 => form.getStatus(res,status1,200))//langsung diubah ke JSON
    //     .catch(error => console.log(error))
    // },

    // getTitle : (req,res) =>{
    //     const title = req.params.title
    //     Model.getTitle(title) 
    //     .then(title1 => form.getTitle(res,title1,200))//langsung diubah ke JSON
    //     .catch(error => console.log(error))
    // },

    // getByStatus : (req,res) =>{
    //     const status = req.params.status
    //     Model.getByStatus(status) 
    //     .then(status1 => form.getByStatus(res,status1,200))//langsung diubah ke JSON
    //     .catch(error => console.log(error))
    // },
    // getById : (req,res) =>{
    //     const id = req.params.id
    //     Model.getByID(id) 
    //     .then(id1 => form.getByID(res,id1,200))//langsung diubah ke JSON
    //     .catch(error => console.log(error))
    // },
    // getByGenre : (req,res)=>{ 
    //     const genre = req.params.genre
    //     Model.getByGenre(genre)
    //     .then(genre1=> form.getByGenre(res,genre1,200))
    //     .catch(error=> console.log(error))
        
    // },
    // deleteBooks : (req,res)=>{
    //     const id = req.params.id
    //     Model.deleteBooks(id)
    //     .then(id1=> form.deleteBooks(res,id1,200))
    //     .catch(error=> console.log(error))
    // },
    // postBooks : (req,res)=>{
    //     const body = req.body
    //     Model.postBooks(body)
    //     .then(body1=>form.postBooks(res,body1,200))
    //     .catch(error=> console.log(error))
    // },
    // putBooks:(req,res)=>{
    //     const body = req.body
    //     const id = req.params.id
    //     Model.putBooks(body,id)
    //     .then(results=> form.putBooks(res,results,200))
    //     .catch(error=> console.log(error))
    // },
    // updateBooks:(req,res)=>{
    //     const body = req.body
    //     const id = req.params.id
    //     Model.putBooks(body,id)
    //     .then(results=> form.putBooks(res,results,200))
    //     .catch(error=> console.log(error))
    // },
    

}