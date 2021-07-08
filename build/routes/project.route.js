"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROJECT_API = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("../controllers/project.controller");
exports.PROJECT_API = express_1.default.Router();
// Creates a new project given a request body containing project: { name: string }
// need to add middleware - checkAuth, checkRoleAdmin,
exports.PROJECT_API.post("/create_project", project_controller_1.createProject);
exports.PROJECT_API.get("/", project_controller_1.getProjects);
exports.PROJECT_API.get("/:name", project_controller_1.getProjectByName);
