"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAPI = void 0;
const express_1 = __importDefault(require("express"));
exports.authAPI = express_1.default.Router();
// testing
exports.authAPI.get("/test", (req, res, next) => {
    res.json({ data: "test" });
});
