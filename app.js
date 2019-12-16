require('dotenv').config()
const express = require ('express');
//const mysql = require ('mysql');
const bodyparser = require('body-parser');
const airapi = require('airapi')

const router = require('./Routes/index')
const cors = require ('cors')
const helmet =require('helmet')
// const logger = require ('morgan')
const auth = require ('./Helpers/Middleware/auth')
// const userRouter = require('./Routes/users')

const app = express(); 

app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use('/', router);
// app.use(logger('dev'))
app.use(helmet.xssFilter())
app.use(express.json())

app.get('/test/test-airapi', (req, res) => {
    airapi.getListingInfoHost({token: 'faketoken3sDdfvtF9if5398j0v5nui',
    id: 109834757 }).then(result => {
        res.json(result)
    }).catch(err => console.log(err))
    

})


app.listen (process.env.PORT|| 9000,()=> console.log('express is running',));

// app.use ('/', auth.login, router);
module.exports = app
