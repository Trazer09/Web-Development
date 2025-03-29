const express = require('express')
const router = express.Router()
const {body, validationResult } = require('express-validator')
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') 

router.get('/register',(req, res)=>{
    res.render('register')
})


router.post('/register', 
     
body('email').trim().isEmail(),
body('password').trim().isLength({ min: 5}),
body('username').trim().isLength({ min: 3}),

    
    
async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid data",
      });
    }


    const {email, username, password} = req.body;

    const hashPassword = await bcrypt.hash(password, 10) 

  

        const newUser = await userModel.create({
        
        email,
        username,
        password: hashPassword
        
        })
        
        res.json(newUser) 
    
  }
);



router.get('/login', (req, res)=>{
    res.render('login')
    
    }

)

router.post('/login', 
    body('username').trim().isLength({ min: 3}),
    body('password').trim().isLength({ min: 5}),
    async(req, res) =>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
        
        return res.status(400).json({   // this for the error if the username and password are incorrect
        error: errors.array(),
        message: 'Invalid data'
        })
        }


        const  { username, password} = req.body;    //grabbing the username and password form the body

const user = await userModel.findOne({
username: username})                       //searching the entered username in the database


if(!user){                // if not found in the database we simply write the error message
return res.status(400).json({
message: 'username and password is incorrect'})}   // not giving hint to the potential hacker by telling both the data is incorrect

const isMatch = await bcrypt.compare(password, user.password) //comparing the entered pasword with encrypted password using bcrypt




if(!isMatch){       // if the password is incorrect
return res.status(400).json({
message: 'username and password is incorrect'})

}


const token = jwt.sign({              // you creating a token by creating this method
    userId: user._id,
    email: user.email,
    username: user.username
    
    }, 
    
    process.env.JWT_SECRET )       // this the secret which you processing from .env file //( remember that the .env is where you keep all your secrets)
    
    
    res.cookie('token', token)
    res.send('Logged In')

    }
)


module.exports = router