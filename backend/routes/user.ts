import express from "express";
import { Types, Document } from "mongoose";
import { Request, Response, NextFunction } from "express";
import { UserType } from "../types/user";
import { UserModel, UserSchema } from "../models/user.model.";
import jwt from "jsonwebtoken";
import { Secret } from "jsonwebtoken";
import { ROLE } from "../enums/role";
import dotenv from "dotenv";
import { checkAuth }  from "../middleware/check-auth";

dotenv.config({ path: "./backend/config/.env.config" });

export const USER_API = express.Router();

// logins in user and creates signed JWT
USER_API.post("/login", async (req: Request, res: Response, next: NextFunction) => {
    // authentication with github api
    // adds user to database if they are not there already
    // pull user from database
     // temporary static user 
    const userData = req.body.user;
    await UserModel.findOne({email: userData.email})
        .exec()
        .then(async (resolve) =>  {
            if (!resolve) {
                return res.status(401).json({
                    status: 1,
                    data: "Authentication Failed"
                });
            }
            const user: UserType = resolve.toObject();
            const token = jwt.sign(user, process.env.JWT_KEY as Secret, { expiresIn: '1h' });
            console.log(`User with email: ${user.email} logged in`);
            return res.status(200).json({
                status: 0,
                data: { token: token }
            }); 
        })
        .catch(() => {
            return res.status(401).json({
                status: 1,
                data: "Authentication Failed"
            });
        })
    
});

// Changes user username given a request body containing user: { newUsername: string }
// Just for testing
USER_API.post("/change_username", checkAuth, async (req: Request, res: Response, next: NextFunction) => {
    const user: UserType = req.body.user;
    const newUsername: string = req.body.newUsername;
    UserModel.updateOne({ _id: user._id }, {"$set": { "username": newUsername } })
        .exec()
        .then((resolve) => {
            console.log(resolve);
            return res.status(200)
               .send("Username Successfully Updated");
        })
        .catch(() => {
            return res.status(401).json({
                status: 1,
                data: "Failed to Change Username"
            });
        });
});

// Creates new user given a request body containing user: { email: string, username: string, name: string }
// Just for testing
USER_API.post("/create_user", async (req: Request, res: Response, next: NextFunction) => {
    const userInfo = req.body.user
    const newUser = new UserModel({
        _id: new Types.ObjectId(),
        name: userInfo.name,
        email: userInfo.email,
        username: userInfo.username,
        ROLE: ROLE.ADMIN
    });
    await newUser.save()
           .then(resolve => {
                console.log(resolve)
                res.status(200).send("User was successfully created");
           })
           .catch((resolve) => {
                console.log(resolve);
                res.status(401).json({
                    status: 1,
                    data: "Authentication Failed"
                });
           });
});