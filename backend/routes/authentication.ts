import express from "express";
import { Request, Response, NextFunction } from "express";
import { User } from "../types/user";
import jwt from "jsonwebtoken";
import { Secret } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/config/.env.config" });

export const authAPI = express.Router();

// testing
authAPI.get("/test", (req: Request, res: Response, next: NextFunction) => {
    res.json({ data: "test" });
    console.log(process.env.JWT_KEY as Secret)
});


// logins in user and creates signed JWT
authAPI.get("/login", (req: Request, res: Response, next: NextFunction) => {
    // authentication with github api
    // adds user to database if they are not there already
    // pull user from database

     // temporary static user 
     const user: User = {
        _id: "some mongoose.ObjectID()",
        email: "johndoe@gmail.com",
        username: "John Doe",
        ROLE: "MEMBER"
    };
    // then ...
    const token = jwt.sign(user, process.env.JWT_KEY as Secret, { expiresIn: '1h' });
    return res.status(200).json({
        status: 0,
        data: { token: token }
    })
});
