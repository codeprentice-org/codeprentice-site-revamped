import express from "express";
import { Request, Response, NextFunction } from "express";
import { UserType } from "../types/user";
import jwt from "jsonwebtoken";
import { Secret } from "jsonwebtoken";
import dotenv from "dotenv";
import { checkAuth }  from "../middleware/check-auth";

dotenv.config({ path: "./backend/config/.env.config" });

export const USER_API = express.Router();

// testing
USER_API.get("/test", (req: Request, res: Response, next: NextFunction) => {
    res.json({ data: "test" });
    console.log(process.env.JWT_KEY as Secret)
});


// logins in user and creates signed JWT
USER_API.get("/login", (req: Request, res: Response, next: NextFunction) => {
    // authentication with github api
    // adds user to database if they are not there already
    // pull user from database

     // temporary static user 
     const user: UserType = {
        _id: "some mongoose.ObjectID()",
        email: "johndoe@gmail.com",
        username: "John Doe",
        ROLE: "ADMIN"
    };
    // then ...
    const token = jwt.sign(user, process.env.JWT_KEY as Secret, { expiresIn: '1h' });
    return res.status(200).json({
        status: 0,
        data: { token: token }
    });
});

// Changes user username 
USER_API.post("/change_username", checkAuth, (req: Request, res: Response, next: NextFunction) => {
    const user: UserType = req.body.user;
    return res.status(200).json({
        status: 0,
        data: user
    });
    // Change user username
});
