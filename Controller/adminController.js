//2. import schema
const admin = require('../Models/adminSchema')

//3. import jwt
const jwt = require('jsonwebtoken')


//1. To define register logic
exports.register = async(req,res)=>{
    console.log("Inside the register function");

    const {username,email,password} = req.body;
    console.log(`${username} ${email} ${password}`);

    try {
        const existingAdmin = await admin.findOne({email})
        if (existingAdmin) {
            res.status(406).json("User already registered")
        }
        else {
            const newAdmin = await new admin({
                username,
                email,
                password
            })
            await newAdmin.save() //data is saved in db

            //response send to client
            res.status(200).json(newAdmin)
        }
    } catch (err) {
        res.status(500).json("Register API Failed")
    }
}

//2. To define admin login logic
exports.login = async(req,res)=>{
    
    console.log("Inside the login function");

    const {email,password} = req.body;
    console.log(`${email} ${password}`);

    try {
        const existingAdmin = await admin.findOne({email, password})
        if (existingAdmin) {
            //Token generation
            const token = jwt.sign({userId: existingAdmin._id}, "superkey2024")
            res.status(200).json({existingAdmin,token})
        } else {
            //response send to client
            res.status(401).json("Invalid credentials.")
        }
    } catch (error) {
        res.status(500).json("Login API Failed")
    }
}








