"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
var bcrypt_1 = __importDefault(require("bcrypt"));
exports.validateRequest = function (req, res, next) {
    var requestToken = req.header('access-token');
    var backHash = bcrypt_1.default.hashSync(process.env.BACKEND_TOKEN, 10);
    if (bcrypt_1.default.compareSync(requestToken, backHash)) {
        next();
    }
    res.status(400).send("Need access token to get data");
};
