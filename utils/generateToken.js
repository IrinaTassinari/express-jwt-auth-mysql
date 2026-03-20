// ф-я генерации JWT  - эта ф-я принимает пользователя и возвращает токен

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

function generateToken(user){
    const token = jwt.sign(
        {
            id: user.id,
            // role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '2h'
        }
    )
    return token
}

export default generateToken

