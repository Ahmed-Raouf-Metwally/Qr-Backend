const User = require("../../../DB/model/Users")
const Student = require("../../../DB/model/student")
const Doctor = require("../../../DB/model/Doctor")
const Admin = require("../../../DB/model/Admins")
const S_Admin = require("../../../DB/model/S_Admin")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const JWT = process.env.JWT_SEC


const SigninUser = async (req, res, next) => {
    const reqq = { Email, Password } = req.body;



    const logedInUser = await User.findOne({ Email })
    if (logedInUser) {
        try {
            Id = logedInUser.ID
            await bcrypt.compare(Password, logedInUser.Password, async function (err, result) {
                if (result) {
                    if (logedInUser.Role == 4) {
                        const student = await Student.findOneAndUpdate({ "ID": Id }, { "LogedIn": true }, { new: true })
                        res.json(student)
                    }
                    else if (logedInUser.Role == 3) {
                        Id = logedInUser.ID
                        const Dr = await Doctor.findOneAndUpdate({ "ID": Id }, { "LogedIn": true }, { new: true })
                        res.json(Dr)
                    }
                    else if (logedInUser.Role == 2) {
                        Id = logedInUser.ID
                        const admin = await Admin.findOneAndUpdate({ "ID": Id }, { "LogedIn": true }, { new: true })
                        res.json(admin)
                    }
                    else if (logedInUser.Role == 1) {
                        Id = logedInUser.ID
                        const sAdmin = await S_Admin.findOneAndUpdate({ "ID": Id }, { "LogedIn": true }, { new: true })
                        res.json(sAdmin)
                    }
                    else {
                        res.json({ message: "You Are not Autrized" })
                    }
                }
                else {
                    console.log(req.Email)
                    res.json({ message: "your Email Or Password is Incorrect" })
                }

            })
        } catch (error) {
            res.json(error)
        }
    } else {
        console.log(reqq)
        res.json({ message: "you are not a user" })
    }
}

const SignOutUser = async (req, res, next) => {
    const { ID } = req.body;

    try {
        const logedInUser = await User.findOne({ "ID": ID })
        const Id = logedInUser.ID

        if (logedInUser.Role == 4) {
            const student = await Student.findOneAndUpdate({ "ID": Id }, { "LogedIn": false }, { new: true })
            res.json(student)
        }
        else if (logedInUser.Role == 3) {
            Id = logedInUser.ID
            const Dr = await Doctor.findByIdAndUpdate({ "ID": Id }, { "LogedIn": false }, { new: true })
            res.json(Dr)
        }
        else if (logedInUser.Role == 2) {
            Id = logedInUser.ID
            const admin = await Admin.findByIdAndUpdate({ "ID": Id }, { "LogedIn": false }, { new: true })
            res.json(admin)
        }
        else if (logedInUser.Role == 1) {
            Id = logedInUser.ID
            const sAdmin = await S_Admin.findByIdAndUpdate({ "ID": Id }, { "LogedIn": false }, { new: true })
            res.json(sAdmin)
        }
        else {
            res.json({ message: "You Are not Autrized" })
        }
    } catch (error) {
        res.json(error)
    }
}


const changepassword = async (req, res, next) => {
    const { ID, oldPassword, newPassword, cPassword } = req.body
    const NewPassword = await bcrypt.hash(newPassword, 10)
    const user = await User.findOne({ "ID": ID })
    try {
        if (newPassword == cPassword) {
            if (user) {
                await bcrypt.compare(oldPassword, user.Password, async function (err, result) {
                    if (result) {
                        if (user.Role == 4) {
                            const student = await Student.findOneAndUpdate({ "ID": ID }, { "Password": NewPassword }, { new: true })
                            const user = await User.findOneAndUpdate({ "ID": ID }, { "Password": NewPassword }, { new: true })
                            res.json({ message: "Password Updated Suceccfully" })
                        }
                        else if (user.Role == 3) {
                            const student = await Doctor.findOneAndUpdate({ "ID": ID }, { "Password": NewPassword }, { new: true })
                            const user = await User.findOneAndUpdate({ "ID": ID }, { "Password": NewPassword }, { new: true })
                            res.json({ message: "Password Updated Suceccfully" })
                        }
                        else if (user.Role == 2) {
                            const student = await Admin.findOneAndUpdate({ "ID": ID }, { "Password": NewPassword }, { new: true })
                            const user = await User.findOneAndUpdate({ "ID": ID }, { "Password": NewPassword }, { new: true })
                            res.json({ message: "Password Updated Suceccfully" })
                        }
                        else if (user.Role == 1) {
                            const student = await S_Admin.findOneAndUpdate({ "ID": ID }, { "Password": NewPassword }, { new: true })
                            const user = await User.findOneAndUpdate({ "ID": ID }, { "Password": NewPassword }, { new: true })
                            res.json({ message: "Password Updated Suceccfully" })
                        }
                    }
                    else {
                        res.json({ message: "your old password is not correct" })
                    }
                })

            }
            else {
                res.json({ message: "user is not founded" })
            }
        }
    } catch (error) {
        res.json(error);
    }
}
const home = async (req, res, next) => {
    res.json({ status: 'hello', })
}

module.exports = {
    SigninUser,
    SignOutUser,
    changepassword,
    home
}