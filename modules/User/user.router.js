const { SigninUser, SignOutUser, home } = require('./controller/user');

const UserRouter = require('express').Router();



UserRouter.post('/logIn',SigninUser)
UserRouter.post('/logout',SignOutUser)
UserRouter.get('/app',home)







module.exports = UserRouter;