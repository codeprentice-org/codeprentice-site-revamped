import express from "express";
import { checkAuth }  from "../middleware/check-auth";
import { createUser, loginUser, changeUsername } from "../controllers/user.controller";

export const USER_API = express.Router();

// logins in user and creates signed JWT
USER_API.post("/login", loginUser);

// Changes user username given a request body containing user: { newUsername: string }
USER_API.post("/change_username", checkAuth, changeUsername);

// Creates new user given a request body containing user: { email: string, username: string, name: string }
USER_API.post("/create_user", createUser);