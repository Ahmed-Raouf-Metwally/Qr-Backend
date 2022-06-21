const { addAdmin, addS_Admin } = require('./controller/S_Admin_OP');

const S_AdminRouter = require('express').Router();


S_AdminRouter.post('/addAdmin',addAdmin)

S_AdminRouter.post('/add_S_Admin',addS_Admin)






module.exports = S_AdminRouter;