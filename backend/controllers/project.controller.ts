import { Request, Response, NextFunction } from "express";
import { Projects, ProjectSchema } from "../models/project.model";
import { UserSchema } from '../models/user.model'
import { Types, Schema } from "mongoose";

// Creates a new project give a request body containing project: { name: string }
// Just for testing
export const createProject = async (req: Request, res: Response, next: NextFunction) => {
   
};

export const getProjects = (req: Request, res: Response) => {
    Projects.find({})
        .then((results:any[]) =>  res.status(200).json(results))
        .catch((err: any) =>  res.status(404).send(err))
}

export const getProjectByName = (req: Request, res: Response) => {
    Projects.find({name: req.query.name})
        .then((results:any[]) =>  res.status(200).json(results))
        .catch((err: any) =>  res.status(404).send(err))
}

