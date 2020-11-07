"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_API = void 0;
var express_1 = __importDefault(require("express"));
var check_auth_1 = require("../middleware/check-auth");
var user_controller_1 = require("../controllers/user.controller");
exports.USER_API = express_1.default.Router();
// logins in user and creates signed JWT
exports.USER_API.post("/login", user_controller_1.loginUser);
// Changes user username given a request body containing user: { newUsername: string }
exports.USER_API.post("/change_username", check_auth_1.checkAuth, user_controller_1.changeUsername);
// Creates new user given a request body containing user: { email: string, username: string, name: string }
exports.USER_API.post("/create_user", user_controller_1.createUser);
