import express from 'express'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt';
import sequelize from './config/db.js';

import authRoutes from './routes/authRoutes.js'
import loggerMiddleware from './middlewares/loggerMiddleware.js'

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

//подключаем наш middleware для логирования запросов - говорит - используй эту ф-ю loggerMiddleware - это мы так middleware вызываем и в скобках - потому что не хотим, чтобы она сразу вызывалась
app.use(loggerMiddleware)

//подключаем марщруты авторизации
//authRoutes - объект, который будет содержать маршруты
app.use('/auth', authRoutes)


//простой тестовый маршрут
app.get('/', (_, res) => {
    res.send('Server is running')
})

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})