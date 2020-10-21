"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./backend/config/.env.config" });
// Verifies the user's JWT and adds user data to request body if valid
module.exports = function (req, res, next) {
    var token = req.body.token;
    if (token === undefined) {
        return res.status(401).json({
            status: 1,
            data: "Authentication Failed"
        });
    }
    try {
        var decoded = jsonwebtoken_1.default.verify(token, 'secret');
        // const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.body.user = decoded;
    }
    catch (error) {
        return res.status(401).json({
            status: 1,
            data: "Authentication Failed"
        });
    }
};
