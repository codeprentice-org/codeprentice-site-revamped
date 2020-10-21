"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAPI = void 0;
var express_1 = __importDefault(require("express"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./backend/config/.env.config" });
exports.authAPI = express_1.default.Router();
// testing
exports.authAPI.get("/test", function (req, res, next) {
    res.json({ data: "test" });
    console.log(process.env.JWT_KEY);
});
// logins in user and creates signed JWT
exports.authAPI.get("/login", function (req, res, next) {
    // authentication with github api
    // adds user to database if they are not there already
    // pull user from database
    // temporary static user 
    var user = {
        _id: "some mongoose.ObjectID()",
        email: "johndoe@gmail.com",
        username: "John Doe",
        ROLE: "MEMBER"
    };
    // then ...
    var token = jsonwebtoken_1.default.sign(user, process.env.JWT_KEY, { expiresIn: '1h' });
    return res.status(200).json({
        status: 0,
        data: { token: token }
    });
});
