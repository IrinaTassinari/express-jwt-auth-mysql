//контроллер авторизации

import bcrypt from 'bcrypt'
import authUsers from '../models/authUser.js'
import generateToken from '../utils/generateToken.js'

// user register для регистрации
export async function register(req,res){
    const {username, email,password} = req.body

    try{
        const existingEmail = await authUsers.findOne({
    where: { email }
})

 if (existingEmail) {
            return res.status(400).json({
                message: 'User with this email already exists'
            })
        }
 
const existingUsername = await authUsers.findOne({
    where: { username }
})

if (existingUsername) {
            return res.status(400).json({
                message: 'User with this username already exists'
            })
        }


const hashedPassword = await bcrypt.hash(password, 10)
     
const newUser = await authUsers.create({
            username,
            email,
            password: hashedPassword
        })

        //generating JWT
        const token = generateToken(newUser)

        res.status(201).json({
            message: 'User registered successfully',
            token
    })
    } catch(error){
        res.status(500).json({
            message: 'Error register'
        })
    }
}


// user signin  для входа
export async function signIn(req,res){
    const {email,password} = req.body

    try{
        //const user = users.find((user) => user.email === email)
        //const user = authUsers.findOne((user) => user.email === email)

         const user = await authUsers.findOne({
    where: { email }
})

        if(!user){
            return res.status(404).json({
                message: 'User not found'
            })
        }

        //comparing password
        const validPassword = await bcrypt.compare(
            password,
            user.password
        )

        if(!validPassword){
            return res.status(401).json({
                message: 'Incorrect password'
            })
        }

        //generating JWT
        const token = generateToken(user)

        res.json({
            message: 'Login successful',
            token
    })
    } catch(error){
        res.status(500).json({
            message: 'Error login'
        })
    }
}

// getting profile  для защищённого профиля
export function getProfile(req,res){
    res.json({
        message: 'User profile',
        user: req.user
    })
}