"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROJECT_API = void 0;
var express_1 = __importDefault(require("express"));
var check_auth_1 = require("../middleware/check-auth");
var check_role_1 = require("../middleware/check-role");
exports.PROJECT_API = express_1.default.Router();
exports.PROJECT_API.get("/test", check_auth_1.checkAuth, check_role_1.checkRoleAdmin, function (req, res, next) {
    res.json({ data: "test" });
});
