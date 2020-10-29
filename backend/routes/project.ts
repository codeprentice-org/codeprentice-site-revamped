import express from "express";
import { Request, Response, NextFunction } from "express";
import { ProjectModel } from "../models/project";
import { checkAuth }  from "../middleware/check-auth";
import { checkRoleAdmin } from "../middleware/check-role";

export const PROJECT_API = express.Router();


PROJECT_API.get("/test", checkAuth, checkRoleAdmin, (req: Request, res: Response, next: NextFunction) => {
    res.json({ data: "test" });
});