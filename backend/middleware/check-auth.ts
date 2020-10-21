import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";

dotenv.config({ path: "./backend/config/.env.config" });

// Verifies the user's JWT and adds user data to request body if valid
module.exports = (req: Request, res: Response, next: NextFunction) => {
    const token = req.body.token;
    if (token === undefined) {
        return res.status(401).json({
                status: 1,
                data: "Authentication Failed"
            });
    }
    try {
        const decoded = jwt.verify(token, 'secret');
        // const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.body.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            status: 1,
            data: "Authentication Failed"
        })
    }
}