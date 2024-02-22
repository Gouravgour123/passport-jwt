const express = require('express');
const { registration, login } = require('../Controller/userController');
const userRouter = express();
userRouter.post('/registration',registration)
userRouter.post('/login',login)

module.exports = {userRouter}