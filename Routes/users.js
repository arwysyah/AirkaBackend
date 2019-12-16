// const register = require('../Controllers/users')
// const getUsers = require('../Controllers/users')
// const getUserById = require('../Controllers/users')
// const deleteUser = require('../Controllers/users')
// const updateUser = require('../Controllers/users')
// const login = require ('../Controllers/users')
const router = require('express').Router();
// const {verifyToken} = require('../Helpers/Middleware/auth')

const {register,getUsers,getUserById,updateUser,deleteUser,login} = require ('../Controllers/users')

router.post('/register',register)
router.get('/',getUsers)
router.get('/:id',getUserById)
// router.delete('/',verifyToken,deleteUser)
// router.patch('/',updateUser)
router.post('/login',login)

module.exports = router