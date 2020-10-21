import express from 'express';
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config({ path: "./backend/config/.env.config" });

// API Imports
import { authAPI } from "./routes/authentication";

// Express config
const app = express();
app.use(express.json());

// For sending view 
// app.use(express.static(path.join(__dirname, "../../client/build")));
// app.get("/", (req: Request, res: Response) => {
//         res.sendFile(path.join(__dirname, "../client/build/index.html"));
// })

// Config API Routes
app.use("/auth", authAPI);

// Start Express server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));