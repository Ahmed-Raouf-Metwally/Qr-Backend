const Admin = require("../../../DB/model/Admins")
const SuperAdmin = require("../../../DB/model/S_Admin")
const User = require("../../../DB/model/Users")
const bcrypt = require('bcrypt')
let salt =process.env.salt


const addAdmin = async (req, res, next) => {
    const Adm = { ID, Name, Email, Password } = req.body;

    try {
        const Password = await bcrypt.hash(Password, salt, function (err, hash) {
            let hashedPassword = hash
        })
        const admin = await Admin.findOne({ ID })

        if (admin) {
            res.json({ message: "ID exist" })
        } else {
            const Role = 2
            const saveduser = await User.insertMany([{ ID, Email, Password: hashedPassword, Role }])
            const savedAdmin = await Admin.insertMany([{ ID, Name, Email, Password: hashedPassword }])
            res.json({ message: "Done" })
        }
    } catch (error) {
        res.json(error)
    }

}
const addS_Admin = async (req, res, next) => {
    const S_Adm = { ID, Name, Email, Password: crayptedPass } = req.body;

    try {
        const Password = await bcrypt.hash(crayptedPass, 10)
        const s_admin = await SuperAdmin.findOne({ ID })

        if (s_admin) {
            res.json({ message: "ID exist" })
        } else {
            const Role = 1
            const saveduser = await User.insertMany([{ ID, Email, Password, Role }])
            const savedAdmin = await SuperAdmin.insertMany([{ ID, Name, Email, Password }])

            res.json({ message: "Done" })
        }
    } catch (error) {
        res.json(error)
    }

}

module.exports = {
    addAdmin,
    addS_Admin
}