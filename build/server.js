"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./routes/user.route");
const project_route_1 = require("./routes/project.route");
const picture_route_1 = require("./routes/picture.route");
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const validate_request_1 = require("./middleware/validate-request");
require("dotenv").config();
// Set rate limit properties
const MINUTES = 15;
const limiter = express_rate_limit_1.default({
    windowMs: MINUTES * 60 * 1000,
    max: 100 // limit each IP to 100 requests per windowMs
});
// Connect to database
mongoose_1.default.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose_1.default.connection;
database.on("error", () => console.log("Unable to connect to the database"));
database.once("open", () => console.log("Connected to database"));
// Express config
const app = express_1.default();
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
// Rate limiting is disabled for testing
//app.use(limiter);
// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);
// For sending view 
app.use(express_1.default.static(path_1.default.join(__dirname, "./static")));
// Config API Routes
app.use("/user", validate_request_1.validateRequest, user_route_1.USER_API);
app.use("/project", validate_request_1.validateRequest, project_route_1.PROJECT_API);
app.use("/picture", validate_request_1.validateRequest, picture_route_1.PICTURE_API);
// Start Express server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
