import express from "express";
import { Request, Response, NextFunction } from "express";
import { checkAuth } from "../middleware/check-auth";
import { checkRoleAdmin } from "../middleware/check-role";
import { createProject, getProjects, getProjectByName } from "../controllers/project.controller";

export const PROJECT_API = express.Router();

// Creates a new project given a request body containing project: { name: string }
// need to add middleware - checkAuth, checkRoleAdmin,
PROJECT_API.post("/create_project", createProject); 

PROJECT_API.get("/", getProjects);

PROJECT_API.get("/:name", getProjectByName);
