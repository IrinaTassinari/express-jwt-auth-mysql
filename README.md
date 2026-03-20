# Express JWT Auth MySQL

Node.js and Express application for user registration and authentication using:

- `bcrypt` for password hashing
- `JWT` for authorization
- `MySQL` as the database
- `Sequelize` and `sequelize-cli` for database work and migrations

## Features

- user registration
- user login
- JWT token generation
- access to a protected route using a token
- user data storage in MySQL

## Technologies

- Node.js
- Express
- MySQL
- Sequelize
- sequelize-cli
- bcrypt
- jsonwebtoken
- dotenv

## Important

Before running the project:

1. install dependencies with `npm install`
2. create the `.env` file
3. create a MySQL database
4. run migrations
5. start the server

## Project Setup

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root.

Example `.env`:

```env
PORT=3000
DB_USER=root
DB_PASSWORD=your_password
DB_NAME_DEV=auth_jwt_db
DB_NAME_TEST=database_test
DB_NAME_PROD=database_production
DB_HOST=127.0.0.1
DB_DIALECT=mysql
NODE_ENV=development
JWT_SECRET=your_secret_key
```

## Database Creation

First, create a MySQL database, for example:

```sql
CREATE DATABASE auth_jwt_db;
```

## Migrations

After creating the database, run migrations:

```bash
npx sequelize-cli db:migrate
```

## Run the Project

Start the server:

```bash
node app.js
```

## Postman Documentation

Postman documentation:

https://documenter.getpostman.com/view/53300232/2sBXihrYoe

## Routes

### Registration

`POST /auth/register`

Example body:

```json
{
  "username": "irina",
  "email": "irina@mail.com",
  "password": "123456"
}
```

### Login

`POST /auth/signin`

Example body:

```json
{
  "email": "irina@mail.com",
  "password": "123456"
}
```

### User Profile

`GET /auth/profile`

Send the token in headers:

```http
Authorization: Bearer your_token
```

## Project Structure

```bash
config/
controllers/
middlewares/
migrations/
models/
routes/
utils/
app.js
.env
```

---

# Express JWT Auth MySQL

Приложение на Node.js и Express для регистрации и аутентификации пользователей с использованием:

- `bcrypt` для хэширования пароля
- `JWT` для авторизации
- `MySQL` в качестве базы данных
- `Sequelize` и `sequelize-cli` для работы с базой данных и миграциями

## Функционал

- регистрация пользователя
- вход пользователя
- генерация JWT токена
- доступ к защищённому маршруту по токену
- хранение данных пользователей в MySQL

## Технологии

- Node.js
- Express
- MySQL
- Sequelize
- sequelize-cli
- bcrypt
- jsonwebtoken
- dotenv

## Важно

Перед запуском проекта:

1. установить зависимости через `npm install`
2. создать файл `.env`
3. создать базу данных MySQL
4. выполнить миграции
5. запустить сервер

## Установка Проекта

Установить зависимости:

```bash
npm install
```

## Переменные Окружения

Нужно создать файл `.env` в корне проекта.

Пример `.env`:

```env
PORT=3000
DB_USER=root
DB_PASSWORD=your_password
DB_NAME_DEV=auth_jwt_db
DB_NAME_TEST=database_test
DB_NAME_PROD=database_production
DB_HOST=127.0.0.1
DB_DIALECT=mysql
NODE_ENV=development
JWT_SECRET=your_secret_key
```

## Создание Базы Данных

Сначала нужно создать базу данных в MySQL, например:

```sql
CREATE DATABASE auth_jwt_db;
```

## Миграции

После создания базы данных нужно выполнить миграции:

```bash
npx sequelize-cli db:migrate
```

## Запуск Проекта

Запуск сервера:

```bash
node app.js
```

## Документация Postman

Документация Postman:

https://documenter.getpostman.com/view/53300232/2sBXihrYoe

## Маршруты

### Регистрация

`POST /auth/register`

Пример body:

```json
{
  "username": "irina",
  "email": "irina@mail.com",
  "password": "123456"
}
```

### Вход

`POST /auth/signin`

Пример body:

```json
{
  "email": "irina@mail.com",
  "password": "123456"
}
```

### Профиль Пользователя

`GET /auth/profile`

Нужно передать токен в заголовках:

```http
Authorization: Bearer your_token
```

## Структура Проекта

```bash
config/
controllers/
middlewares/
migrations/
models/
routes/
utils/
app.js
.env
```
