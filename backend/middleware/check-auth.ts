import jwt, { Secret } from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";

dotenv.config({ path: "./backend/config/.env.config" });

// Verifies the user's JWT and adds user data to request body if valid
export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    try {
        // Token is found in http Authorization header and takes the form:
        // Bearer <TOKEN> - by convention
        const token = (req.headers.authorization as string).split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY as Secret);
        req.body.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            status: 1,
            data: "Authentication Failed"
        })
    }
}