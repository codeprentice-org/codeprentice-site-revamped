import express from 'express';
import { Request, Response, NextFunction } from "express";
import { USER_API } from "./routes/user.route";
import { PROJECT_API } from "./routes/project.route";
import { PICTURE_API } from './routes/picture.route';
import bodyParser from 'body-parser'
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { validateRequest } from './middleware/validate-request';
require("dotenv").config();

// Set rate limit properties
const MINUTES = 15;
const limiter = rateLimit({
  windowMs: MINUTES * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Connect to database
mongoose.connect(
    process.env.DB as string,
    { useNewUrlParser: true, useUnifiedTopology: true }
);
const database = mongoose.connection;
database.on("error", () => console.log("Unable to connect to the database"));
database.once("open", () => console.log("Connected to database"));

// Express config
const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rate limiting is disabled for testing
//app.use(limiter);

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

// For sending view 
app.use(express.static(path.join(__dirname, "./static")));

// Config API Routes
app.use("/user", validateRequest, USER_API);
app.use("/project", validateRequest, PROJECT_API);
app.use("/picture", validateRequest, PICTURE_API);

// Start Express server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
