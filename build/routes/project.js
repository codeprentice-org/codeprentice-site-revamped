"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROJECT_API = void 0;
var express_1 = __importDefault(require("express"));
var user_1 = require("../models/user");
var check_auth_1 = require("../middleware/check-auth");
var check_role_1 = require("../middleware/check-role");
var mongoose_1 = __importDefault(require("mongoose"));
exports.PROJECT_API = express_1.default.Router();
exports.PROJECT_API.get("/test", check_auth_1.checkAuth, check_role_1.checkRoleAdmin, function (req, res, next) {
    res.json({ data: "test" });
});
exports.PROJECT_API.post("/create_user", function (req, res, next) {
    var userInfo = req.body.user;
    var newUser = new user_1.UserModel({
        _id: new mongoose_1.default.Types.ObjectId(),
        email: userInfo.email,
        username: userInfo.username,
        ROLE: "MEMBER"
    });
    newUser.save();
    return res.status(200).send("User was successfully created");
});
