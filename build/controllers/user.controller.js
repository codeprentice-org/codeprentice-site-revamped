"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.gitHubCallback = exports.createUser = exports.changeUsername = exports.loginUser = void 0;
const user_model_1 = require("../models/user.model");
const qs_1 = __importDefault(require("qs"));
const axios_1 = __importDefault(require("axios"));
const mongoose_1 = require("mongoose");
//localhost:4200/user/github/login
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(process.env.GITHUB_CLIENT_SECRET);
    // Redirect caller to the GitHub auth web flow with our app credentials
    res.redirect("https://github.com/login/oauth/authorize?" + qs_1.default.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        scope: "read:org",
        redirect_uri: "http://localhost:4200/user/github/callback"
    }));
});
exports.loginUser = loginUser;
const gitHubCallback = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // After successfull auth on GitHub, a code is sent back. We POST it back
    // to exchange it for an access token
    const body = {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: req.query.code // The code we received from GitHub
    };
    const opts = { headers: { accept: 'application/json' } };
    axios_1.default.post(`https://github.com/login/oauth/access_token`, body, opts)
        .then((post_res) => {
        console.log(post_res.data);
        axios_1.default.get('https://api.github.com/user', //memberships/orgs/codeprentice-org
        { headers: { authorization: "token " + post_res.data.access_token, accept: "application/vnd.github.v3+json" } })
            .then((r) => qs_1.default.parse(r.data))
            .catch((err) => console.log(err));
    })
        .catch((err) => res.status(500).json({ message: err.message }));
});
exports.gitHubCallback = gitHubCallback;
// const loginUser = async (req: Request, res: Response, next: NextFunction) => {
//     // authentication with github api
//     // adds user to database if they are not there already
//     // pull user from database
//      // temporary static user 
//     const userData = req.body.user;
//     await Users.findOne({email: userData.email})
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
const changeUsername = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body.user;
    const newUsername = req.body.newUsername;
    user_model_1.Users.updateOne({ _id: user._id }, { "$set": { "username": newUsername } })
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
exports.changeUsername = changeUsername;
// Creats a new user given a request body containing user: { email: string, username: string, name: string }
// Just for testing
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    req.body._id = mongoose_1.Types.ObjectId();
    const newUser = new user_model_1.Users(Object.assign({}, req.body));
    yield newUser.save()
        .then((data) => res.status(200).send("User was successfully created"))
        .catch((err) => res.status(401).send("Error in creating user"));
});
exports.createUser = createUser;
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("getUsers()");
    user_model_1.Users.find()
        .then((results) => {
        res.status(200).json(results);
    })
        .catch((err) => {
        console.log("Error in fetching users", err);
        res.status(404).send(err);
    });
});
exports.getUsers = getUsers;
