"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const safe_compare_1 = __importDefault(require("safe-compare"));
exports.validateRequest = (req, res, next) => {
    console.log("validateRequest()");
    let requestToken = req.header('access_token');
    if (safe_compare_1.default(requestToken, process.env.ACCESS_TOKEN)) {
        console.log("Access Granted");
        next();
    }
    else {
        console.log("Access Token invalid");
        res.status(400).send("Need access token to get data");
    }
};
