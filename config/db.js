import { Sequelize } from "sequelize";
import config from './config.js';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Определяем текущее окружение
 * 
 * development
 * test
 * production
 */

const env = process.env.NODE_ENV || 'development';

// Забираем конфигурацию для текущего окружения
const dbConfig = config[env];

// Создаем подключение к БД через Sequelize
/**
 * Класс Sequelize принимает:
 * 1 параметр - имя БД
 * 2 параметр - имя пользователя
 * 3 параметр - пароль
 * 4 параметр - объект настроек
 */
const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
    }
);

export default sequelize;