const AdminRouter = require('express').Router();

const { addDoctor,addMatrialtodoc } = require('./controller/DrOP');
const { addMatrial } = require('./controller/MatrialOP');
const { addStudent,addMatrialtoOneStud,AddMatrialToAllStud  } = require('./controller/StudOP');






AdminRouter.post('/addStudent',addStudent)
AdminRouter.post('/addMatrialtoOneStud',addMatrialtoOneStud)
AdminRouter.put('/AddMatrialToAllStud',AddMatrialToAllStud )
AdminRouter.post('/addMatrialtoDoc',addMatrialtodoc)
AdminRouter.post('/addDoctor',addDoctor)
AdminRouter.post('/addMatrial',addMatrial)








module.exports = AdminRouter;