const DrRouter = require('express').Router();


const { getDrmat } = require('./controller/doctor');
const { addtopic } = require('./controller/doctor');
const { getDrAlltopic } = require('./controller/doctor');
const { getDronetopic } = require('./controller/doctor');
const { removetopic } = require('./controller/doctor');
const { updateDronetopic } = require('./controller/doctor')


DrRouter.post('/addtopic',addtopic)
DrRouter.get('/getDrmat',getDrmat)
DrRouter.get('/getDrAlltopic',getDrAlltopic)
DrRouter.get('/getDronetopic',getDronetopic)
DrRouter.delete('/removetopic',removetopic)
DrRouter.put('/updateDronetopic',updateDronetopic)



module.exports = DrRouter;