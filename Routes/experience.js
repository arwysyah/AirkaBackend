const express = require('express')
const Router = express.Router()
const {getExperience} = require('../Controllers/experince')


Router.get('/',getExperience)

module.exports = Router