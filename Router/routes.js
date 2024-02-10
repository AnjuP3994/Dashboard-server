//1. import express
const express = require('express')

//2. create router object of express to define paths
const router = new express.Router()

//3. import userController 
const userController = require('../Controller/userController')

//7. import adminController 
const adminController = require('../Controller/adminController')

//6. import jwtMiddleware
const jwtMiddleware = require('../Middleware/jwtMiddleware')

// // using router object to define routes(paths)

//4. Register API call
router.post('/users/register',userController.register)

//5. Login API call
router.post('/users/login',userController.login)

//8. Admin register API call
router.post('/admin/register',adminController.register)

//9. Admin login API call
router.post('/admin/login',adminController.login)


module.exports = router;

