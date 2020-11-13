import { Types, Document } from "mongoose";
import { Request, Response, NextFunction } from "express";
import { UserType } from "../types/user";
import { UserModel, UserSchema } from "../models/user.model";
import jwt from "jsonwebtoken";
import { Secret } from "jsonwebtoken";
import { ROLE } from "../enums/role";
import dotenv from "dotenv";
import { AxiosResponse } from "axios";
import qs from "qs";
import axios from "axios";

dotenv.config({ path: "./backend/config/.env.config" });

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    // Redirect caller to the GitHub auth web flow with our app credentials
    res.redirect("https://github.com/login/oauth/authorize?" + qs.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        scope: "read:org",
        redirect_uri: "http://localhost:4200/user/callback"
    }))
};

const gitHubCallback = async (req: Request, res: Response, next: NextFunction) => {
    // After successfull auth on GitHub, a code is sent back. We POST it back
    // to exchange it for an access token
    const body = {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: req.query.code // The code we received from GitHub
    };
    const opts = { headers: { accept: 'application/json' } };
    axios.post(`https://github.com/login/oauth/access_token`, body, opts)
    .then((post_res:AxiosResponse) => {
        axios.get('https://api.github.com/user/memberships/orgs/codeprentice-org',
        { headers: { authorization: "token" + post_res.data.access_token, accept: "application/vnd.github.v3+json" } })
        .then((r:AxiosResponse) => qs.parse(r.data));
    })
    .catch((err:Error) => res.status(500).json({ message: err.message }));
};

// const loginUser = async (req: Request, res: Response, next: NextFunction) => {
//     // authentication with github api
//     // adds user to database if they are not there already
//     // pull user from database
//      // temporary static user 
//     const userData = req.body.user;
//     await UserModel.findOne({email: userData.email})
//         .exec()
//         .then(async (resolve) =>  {
//             if (!resolve) {
//                 return res.status(401).json({
//                     status: 1,
//                     data: "Authentication Failed"
//                 });
//             }
//             const user: UserType = resolve.toObject();
//             const token = jwt.sign(user, process.env.JWT_KEY as Secret, { expiresIn: '1h' });
//             console.log(`User with email: ${user.email} logged in`);
//             return res.status(200).json({
//                 status: 0,
//                 data: { token: token }
//             }); 
//         })
//         .catch(() => {
//             return res.status(401).json({
//                 status: 1,
//                 data: "Authentication Failed"
//             });
//         })
// };

// Changes user username give a request body container user: { newUsername: string }
// Just for testing
const changeUsername = async (req: Request, res: Response, next: NextFunction) => {
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
};

// Creats a new user given a request body containing user: { email: string, username: string, name: string }
// Just for testing
const createUser = async (req: Request, res: Response, next: NextFunction) => {
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
};


export { loginUser, changeUsername, createUser, gitHubCallback }
