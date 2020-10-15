"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./backend/config/.env.config" });
// API Imports
var authentication_1 = require("./routes/authentication");
// Express config
var app = express_1.default();
app.use(express_1.default.json());
// For sending view 
// app.use(express.static(path.join(__dirname, "../../client/build")));
// app.get("/", (req: Request, res: Response) => {
//         res.sendFile(path.join(__dirname, "../client/build/index.html"));
// })
// Config API Routes
app.use("/auth", authentication_1.authAPI);
// Start Express server
var PORT = process.env.PORT || 4000;
app.listen(PORT, function () { return console.log("Server started on port " + PORT); });
