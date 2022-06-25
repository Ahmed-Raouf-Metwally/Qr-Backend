const { SigninUser, SignOutUser, home, changepassword } = require('./controller/user');

const UserRouter = require('express').Router();



UserRouter.post('/logIn',SigninUser)
UserRouter.post('/logout',SignOutUser)
UserRouter.put('/changePassword',changepassword)
UserRouter.get('/app',home)







module.exports = UserRouter;