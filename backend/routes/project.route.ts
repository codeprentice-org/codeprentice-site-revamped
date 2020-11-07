import express from "express";
import { checkAuth } from "../middleware/check-auth";
import { checkRoleAdmin } from "../middleware/check-role";
import { createProject } from "../controllers/project.controller";

export const PROJECT_API = express.Router();

// Creates a new project given a request body containing project: { name: string }
PROJECT_API.post("/create_project", checkAuth, checkRoleAdmin, createProject); 
