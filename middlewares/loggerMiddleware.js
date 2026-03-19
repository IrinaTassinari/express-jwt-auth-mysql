// Middleware для логирования запросов
/**
 * Этот Middleware выполняется при каждом запросе к серверу
 * Он выводит в консоль:
 * - время запроса
 * - HTTP-метод
 * - URL
 */

function loggerMiddleware(req, _res, next){
    const time = new Date().toLocaleDateString()

    console.log(
        `[${time}] ${req.method} request - ${req.url}`
    )

    next()
}

export default loggerMiddleware