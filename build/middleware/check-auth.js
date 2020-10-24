"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./backend/config/.env.config" });
// Verifies the user's JWT and adds user data to request body if valid
exports.checkAuth = function (req, res, next) {
    try {
        // Token is found in http Authorization header and takes the form:
        // Bearer <TOKEN> - by convention
        var token = req.headers.authorization.split(" ")[1];
        var decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_KEY);
        req.body.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({
            status: 1,
            data: "Authentication Failed"
        });
    }
};
