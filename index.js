//1. loads .env file 
require('dotenv').config()

//2. import express
const express = require('express')

//3. import cors
const cors = require('cors')

//10. import router
const router = require('./Router/routes')

//11. import DB
const db = require('./DB/connection')

//4. create an application using express
const server = express()

//5. use cors
server.use(cors())
server.use(express.json())  
server.use(router)

//6. define port
const PORT = 3003 || process.env.PORT   

//7. listening on port
server.listen((PORT),(req,res)=>{
    console.log('listening on port '+PORT);
})

//8. http get resolving to http://localhost:3003
server.get('/',(req,res)=>{   
    res.send('Server started...');
})

//9. http post resolving to http://localhost:3003
server.post('/',(req,res)=>{
    res.send('post method');
})

