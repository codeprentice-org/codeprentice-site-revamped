import express from 'express';
import { Request, Response, NextFunction } from "express";
import bodyParser from 'body-parser'
import dotenv from "dotenv";
import path from "path"
dotenv.config({ path: "./backend/config/.env.config" });

// API Imports
import { USER_API } from "./routes/user";

// Express config
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: false } ))

// For sending view 
app.use(express.static(path.join(__dirname, "./../frontend/build")));
app.get("/", (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, "./../frontend/build/index.html"));
})

// Config API Routes
app.use("/user", USER_API);

// Start Express server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));