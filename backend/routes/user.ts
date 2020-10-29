import express from "express";
import { Types } from "mongoose";
import { Request, Response, NextFunction } from "express";
import { UserType } from "../types/user";
import { UserModel } from "../models/user";
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
USER_API.post("/login", async (req: Request, res: Response, next: NextFunction) => {
    // authentication with github api
    // adds user to database if they are not there already
    // pull user from database

     // temporary static user 
//    const userData = req.body.user;
//     var user: UserType;
//     UserModel.findOne({email: userData.email})
//         .exec()
//         .then(resolve => user = resolve)
//     // then ...
//     console.log(user)
//     const token = jwt.sign(user, process.env.JWT_KEY as Secret, { expiresIn: '1h' });
//     return res.status(200).json({
//         status: 0,
//         data: { token: token }
//     }); 
});

// Changes user username 
USER_API.post("/change_username", checkAuth, (req: Request, res: Response, next: NextFunction) => {
    const user: UserType = req.body.user;
    const newUsername: string = req.body.newUsername;
    UserModel.update({_id: user._id}, { email: newUsername })
    return res.status(200).send("Username Successfully Updated");
});

// Creates new user given a request body containing user: { email: string, username: string }
// Just for testing
USER_API.post("/create_user", (req: Request, res: Response, next: NextFunction) => {
    const userInfo = req.body.user
    const newUser = new UserModel({
        _id: new Types.ObjectId(),
        email: userInfo.email,
        username: userInfo.username,
        ROLE: "MEMBER"
    });
    newUser.save();
    return res.status(200).send("User was successfully created");
});