import express from "express";
import { Request, Response, NextFunction } from "express";
import { ProjectModel } from "../models/project";
import { UserModel } from "../models/user";
import { checkAuth }  from "../middleware/check-auth";
import { checkRoleAdmin } from "../middleware/check-role";
import { Types, Schema } from "mongoose";

export const PROJECT_API = express.Router();


// Creates a new project given a request body containing project: { name: string }
// Just for testing
PROJECT_API.post("/create_project", checkAuth, checkRoleAdmin, async (req: Request, res: Response, next: NextFunction) => {
    const projectInfo = req.body.project;
    const teamMember = await UserModel.findOne({ _id: req.body.user._id }).exec(); 
    const newProject = new ProjectModel({
        _id: new Types.ObjectId(),
        name: projectInfo.name,
        team: [(teamMember)? teamMember.toObject(): undefined]
    });
    newProject.save()
              .then((resolve) => {
                  console.log(resolve);
                  res.status(200)
                    .send("Project was successfully created");
              })
              .catch(() => {
                  res.status(401)
                     .send("Unable to create new project");
              });
});