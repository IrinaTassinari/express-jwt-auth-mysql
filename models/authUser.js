import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

// Метод define() создает модель. Модель - это описание таблицы базы данных для работы с данными
const User = sequelize.define('auth_user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'auth_users'
});

/**
 * После определение модели Sequelize
 * автоматически свяжет ее с таблицей Users
 */

export default User;