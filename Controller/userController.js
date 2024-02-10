//2. import schema
const users = require('../Models/userSchema')

//3. import jwt
const jwt = require('jsonwebtoken')

//1. To define register logic
exports.register = async(req,res)=>{
    console.log("Inside the register function");

    const {username,email,password} = req.body;
    console.log(`${username} ${email} ${password}`);

    try {
        const existingUser = await users.findOne({email})
        if (existingUser) {
            res.status(406).json("User already registered")
        }
        else {
            const newUser = await new users({
                username,
                email,
                password
            })
            await newUser.save() //data is saved in db

            //response send to client
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(500).json("Register API Failed")
    }
}


//2. To define login logic
exports.login = async(req,res)=>{
    
    console.log("Inside the login function");

    const {email,password} = req.body;
    console.log(`${email} ${password}`);

    try {
        const existingUser = await users.findOne({email,password})
        if (existingUser) {
            //Token generation
            const token = jwt.sign({userId:existingUser._id}, "superkey2024")
            res.status(200).json({existingUser,token})
        } else {
            //response send to client
            res.status(401).json("Invalid credentials.")
        }
    } catch (error) {
        res.status(500).json("Login API Failed")
    }
}








