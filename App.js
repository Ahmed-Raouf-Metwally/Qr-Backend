const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) 

const { connectDB } = require('./DB/connectDB.JS')
connectDB(); // DB Conection

const AdminRouter = require('./modules/Admin/Admin.router')
const S_AdminRouter = require('./modules/SuperAdmin/SuperAdmin.router')
const studRouter = require('./modules/Student/Student.Router')
const DrRouter = require('./modules/Doctor/Doctor.Router')

const UserRouter = require('./modules/User/user.router')
const matrialrouter=require('./modules/Matrial/matrial.router')
const { required } = require('nodemon/lib/config')

app.use(AdminRouter)
app.use(S_AdminRouter)
app.use(studRouter)
app.use(UserRouter)
app.use(matrialrouter)
app.use(DrRouter)


// app.listen(port, () => console.log(`listening on port ${port}!`))
app.listen(PORT, () => console.log(`listening on port ${PORT}!`))