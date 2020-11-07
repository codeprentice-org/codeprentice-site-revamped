import express, { response } from "express";
import { Types, Document } from "mongoose";
import { Request, Response, NextFunction } from "express";
import { UserType } from "../types/user";
import { UserModel, UserSchema } from "../models/user.model.";
import jwt from "jsonwebtoken";
import { Secret } from "jsonwebtoken";
import { ROLE } from "../enums/role";
import dotenv from "dotenv";
import { checkAuth }  from "../middleware/check-auth";
import { request } from "http";
import { appendFile } from "fs";
import { AxiosResponse } from "axios";

dotenv.config({ path: "./backend/config/.env.config" });

export const USER_API = express.Router();

const qs = require('querystring')
USER_API.get("/auth/github", async (req: Request, res: Response, next: NextFunction) => {
    // Redirect caller to the GitHub auth web flow with our app credentials
    res.redirect("https://github.com/login/oauth/authorize?" + qs.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        scope: "read:org",
        redirect_uri: "http://localhost:4200/user/auth/callback" // specify callback url
    }))
});

const axios = require('axios');
USER_API.get("/auth/callback", async (req: Request, res: Response, next: NextFunction) => {
    // After successfull auth on GitHub, a code is sent back. We POST it back to GitHub
    // to exchange it for an access token
    const body = {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: req.query.code // the code we received from GitHub
    };
    const opts = { headers: { accept: 'application/json' } };
    axios.post(`https://github.com/login/oauth/access_token`, body, opts)
    .then((post_res:AxiosResponse) => post_res.data)
    .then((token:String) => {
      console.log('My token:', token);
      res.json({ ok: 1 });
    })
    .catch((err:Error) => res.status(500).json({ message: err.message }));
});

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