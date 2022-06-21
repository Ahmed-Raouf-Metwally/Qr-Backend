const { SigninUser, SignOutUser } = require('./controller/user');

const UserRouter = require('express').Router();



UserRouter.post('/logIn',SigninUser)
UserRouter.post('/logout',SignOutUser)







module.exports = UserRouter;