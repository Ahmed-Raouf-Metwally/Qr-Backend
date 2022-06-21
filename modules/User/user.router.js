const { SigninUser, SignOutUser, home } = require('./controller/user');

const UserRouter = require('express').Router();



UserRouter.post('/logIn',SigninUser)
UserRouter.post('/logout',SignOutUser)
UserRouter.get('/',home)







module.exports = UserRouter;