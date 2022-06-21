const User = require("../../../DB/model/Users")
const Student = require("../../../DB/model/student")
const Doctor = require("../../../DB/model/doctor")
const Admin = require("../../../DB/model/Admins")
const S_Admin = require("../../../DB/model/S_Admin")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const JWT = process.env.JWT_SEC


const SigninUser = async (req, res, next) => {
    const { Email, Password } = req.body;
    const logedInUser = await User.findOne({ Email, Password })
    Id = logedInUser.ID

    if (logedInUser) {
        if (logedInUser = await bcrypt.compare(Password, User.Password)) {
            if (logedInUser.Role == 4) {
                const student = await Student.findOneAndUpdate({"ID":Id},{ "LogedIn":true },{new:true})
                console.log("dobe")

               // Student.over()//////stoped here (log in)
                res.json(student)
            }
            else if (logedInUser.Role == 3) {
                Id = logedInUser.ID
                const Dr = await Doctor.findByIdAndUpdate({"ID":Id},{ "LogedIn":true },{new:true})
                res.json(Dr)
            }
            else if (logedInUser.Role == 2) {
                Id = logedInUser.ID
                const admin = await Admin.findByIdAndUpdate({"ID":Id},{ "LogedIn":true },{new:true})
                res.json(admin)
            }
            else if (logedInUser.Role == 1) {
                Id = logedInUser.ID
                const sAdmin = await S_Admin.findByIdAndUpdate({"ID":Id},{ "LogedIn":true },{new:true})
                res.json(sAdmin)
            }
            else {
                res.json({ message: "You Are not Autrized" })
            }
        }
    }
    else {
        res.json({ message: "your Email Or Password is Incorrect" })
    }
}



const SignOutUser = async (req, res, next) => {
    const { ID } = req.body;
    
    const logedInUser = await User.findOne({ "ID":ID })
    const Id = logedInUser.ID
    
            if (logedInUser.Role == 4) {
                const student = await Student.findOneAndUpdate({"ID":Id},{ "LogedIn":false },{new:true})
                res.json(student)
            }
            else if (logedInUser.Role == 3) {
                Id = logedInUser.ID
                const Dr = await Doctor.findByIdAndUpdate({"ID":Id},{ "LogedIn":false },{new:true})
                res.json(Dr)
            }
            else if (logedInUser.Role == 2) {
                Id = logedInUser.ID
                const admin = await Admin.findByIdAndUpdate({"ID":Id},{ "LogedIn":false },{new:true})
                res.json(admin)
            }
            else if (logedInUser.Role == 1) {
                Id = logedInUser.ID
                const sAdmin = await S_Admin.findByIdAndUpdate({"ID":Id},{ "LogedIn":false },{new:true})
                res.json(sAdmin)
            }
            else {
                res.json({ message: "You Are not Autrized" })
            }
        }


const changepassword =  async (req, res,next) => {
	const { token, newpassword:Password } = req.body

	if (!Password || typeof Password !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (Password.length < 7) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 8 characters'
		})
	}

	try {
		const user = jwt.verify(token,JWT)

		const _id = user.id

		const password = await bcrypt.hash(Password, 10)

		await User.updateOne(
			{ _id },
			{
				$set: { password }
			}
		)
		res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: ';))' })
	}
}

module.exports = {
    SigninUser,
    SignOutUser,
    changepassword 
}