import express from "express";
import { Request, Response, NextFunction } from "express";
import { UserType } from "../types/user";
import { checkAuth }  from "../middleware/check-auth";
import { checkRoleAdmin } from "../middleware/check-role";

export const PROJECT_API = express.Router();

// testing
PROJECT_API.get("/test", checkAuth, checkRoleAdmin, (req: Request, res: Response, next: NextFunction) => {
    res.json({ data: "test" });
});