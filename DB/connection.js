// connection of nodejs and mongodb

//1. import mongoose
const mongoose = require('mongoose')

//2. create connection string
const connectionString = process.env.DATABASE

//3. connect with mongoose
mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb connection established...");
}).catch((err)=>{
    console.log("Mongodb connection error"+err);
})
