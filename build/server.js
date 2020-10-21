"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import { Request, Response, NextFunction } from "express";
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./backend/config/.env.config" });
// API Imports
var user_1 = require("./routes/user");
// Express config
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
// For sending view 
// app.use(express.static(path.join(__dirname, "../../client/build")));
// app.get("/", (req: Request, res: Response) => {
//         res.sendFile(path.join(__dirname, "../client/build/index.html"));
// })
// Config API Routes
app.use("/user", user_1.USER_API);
// Start Express server
var PORT = process.env.PORT || 4000;
app.listen(PORT, function () { return console.log("Server started on port " + PORT); });
