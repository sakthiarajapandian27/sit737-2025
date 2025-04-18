const express = require("express");
const app = express();
const winston = require("winston");

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "calculator-service" },
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
    ],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(new winston.transports.Console({ format: winston.format.simple() }));
}


const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => {
    if (n2 === 0) throw new Error("Division by zero is not allowed.");
    return n1 / n2;
};
const exponentiate = (n1, n2) => Math.pow(n1, n2);
const squareRoot = (n1) => {
    if (n1 < 0) throw new Error("Square root of negative numbers is not allowed.");
    return Math.sqrt(n1);
};
const modulo = (n1, n2) => n1 % n2;

const validateNumbers = (req, res, next) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = req.query.n2 !== undefined ? parseFloat(req.query.n2) : undefined;

        if (isNaN(n1) || (n2 !== undefined && isNaN(n2))) {
            logger.error("Invalid numbers provided");
            return res.status(400).json({ statusCode: 400, message: "Invalid numbers provided" });
        }

        req.n1 = n1;
        req.n2 = n2;
        next();
    } catch (error) {
        logger.error(error.message);
        res.status(500).json({ statusCode: 500, message: error.message });
    }
};

app.get("/add", validateNumbers, (req, res) => {
    const result = add(req.n1, req.n2);
    logger.info(`Addition: ${req.n1} + ${req.n2} = ${result}`);
    res.status(200).json({ statusCode: 200, operation: "add", result });
});

app.get("/subtract", validateNumbers, (req, res) => {
    const result = subtract(req.n1, req.n2);
    logger.info(`Subtraction: ${req.n1} - ${req.n2} = ${result}`);
    res.status(200).json({ statusCode: 200, operation: "subtract", result });
});

app.get("/multiply", validateNumbers, (req, res) => {
    const result = multiply(req.n1, req.n2);
    logger.info(`Multiplication: ${req.n1} * ${req.n2} = ${result}`);
    res.status(200).json({ statusCode: 200, operation: "multiply", result });
});

app.get("/divide", validateNumbers, (req, res) => {
    try {
        const result = divide(req.n1, req.n2);
        logger.info(`Division: ${req.n1} / ${req.n2} = ${result}`);
        res.status(200).json({ statusCode: 200, operation: "divide", result });
    } catch (error) {
        logger.error(error.message);
        res.status(400).json({ statusCode: 400, message: error.message });
    }
});

app.get("/exponentiate", validateNumbers, (req, res) => {
    const result = exponentiate(req.n1, req.n2);
    logger.info(`Exponentiation: ${req.n1} ^ ${req.n2} = ${result}`);
    res.status(200).json({ statusCode: 200, operation: "exponentiate", result });
});

app.get("/squareRoot", validateNumbers, (req, res) => {
    try {
        const result = squareRoot(req.n1);
        logger.info(`Square Root: sqrt(${req.n1}) = ${result}`);
        res.status(200).json({ statusCode: 200, operation: "squareRoot", result });
    } catch (error) {
        logger.error(error.message);
        res.status(400).json({ statusCode: 400, message: error.message });
    }
});

app.get("/modulo", validateNumbers, (req, res) => {
    const result = modulo(req.n1, req.n2);
    logger.info(`Modulo: ${req.n1} % ${req.n2} = ${result}`);
    res.status(200).json({ statusCode: 200, operation: "modulo", result });
});

const port = 3040;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
