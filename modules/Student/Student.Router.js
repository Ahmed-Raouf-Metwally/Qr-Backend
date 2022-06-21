const StRouter = require('express').Router();


const { getStmat } = require('./controller/stud');
const { getStAlltopic } = require('./controller/stud');
const { getStonetopic } = require('./controller/stud');




StRouter.get('/getStmat',getStmat)
StRouter.get('/getStAlltopic',getStAlltopic)
StRouter.get('/getStonetopic',getStonetopic)



module.exports = StRouter;