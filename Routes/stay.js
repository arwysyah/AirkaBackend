const express = require ('express');
const Router = express.Router() // manggil router
const stayController = require ('../Controllers/stay');
const auth = require('../Helpers/Middleware/auth')

Router.get('/',stayController.getAll);
Router.get('/filter/stays/search/:location',stayController.filterLocation)
Router.get('/limit',stayController.getLimit)
// Router.get('/:id', bookController.getById)
// Router.get('/status/:status',bookController.getByStatus);
// Router.get('/search/genre/:genre',bookController.getByGenre);
// Router.get('/genre/genre',bookController.getGenre)
// Router.get('/status/status/all',bookController.getStatus)
// Router.get('/filter/books/search/:title',bookController.getTitle)
// Router.post('/',bookController.postBooks);
// Router.delete('/:id', bookController.deleteBooks);
// Router.put('/:id',bookController.putBooks);
// Router.put('/:id',bookController.updateBooks)


module.exports = Router
