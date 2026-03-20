// Middleware для проверки JWT
/**
 * Этот middleware проверяет:
 * 1. Есть ли токен
 * 2. Валиден ли токен
 * 3. Декодирует данные пользователя
 */

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function authenticateToken(req, res, next) {
  //получаем заголовок Authorization
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "No Token",
    });
  }

  //проверяем формат Bearer
  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Invalid format or expired token",
    });
  }

  //извлекаем токен
  const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //соxраняем пользователя
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
}
export default authenticateToken;
