

const express = require ('express')
const userRouter = require('./routes/user.routes')

const app = express()
const connectToDB = require('./config/db')

const dotenv = require ('dotenv');
dotenv.config();  // calling the config folder


const cookieParser = require('cookie-parser')
app.use(cookieParser())

connectToDB();
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/user', userRouter)

app.listen(3000, ()=>{
    console.log("Server Running Successfully!")
})