import express from 'express'

import {register, signIn, getProfile} from '../controllers/authControllers.js'
import authenticateToken from '../middlewares/authMiddleware.js'


const router = express.Router()

//Роут /auth/register или /auth/signin вызывает функцию в контроллере
//Контроллер работает с моделью authUser.js маршрут аутентификации

router.post('/register', register)

router.post('/signin', signIn)

//защищён маршрут профиля
router.get('/profile',authenticateToken, getProfile)


export default router;