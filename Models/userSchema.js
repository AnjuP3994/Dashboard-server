//1. If the models need to connect to MongoDB, it can be done through mongoose. So, create mongoose
const mongoose = require('mongoose');

//3. import validator
const validator = require('validator');

//2. Create Schema
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:[3]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email')
            }
        }
    },
    password:{
        type:String,
        required:true
    }
})

//4. export schema
const users = mongoose.model('users',userSchema)

module.exports = users
