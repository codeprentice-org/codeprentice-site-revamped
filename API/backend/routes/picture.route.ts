import express from "express";
import { Request, Response, NextFunction } from "express";
export const PICTURE_API = express.Router();

// Endpoints to get pictures

PICTURE_API.get("/code", (req: Request, res: Response) => {
    res.sendFile("../static/code.jpg");
})

PICTURE_API.get("/coding", (req: Request, res: Response) => {
    res.sendFile("../static/coding.jpg");
})

PICTURE_API.get("/dark", (req: Request, res: Response) => {
    res.sendFile("../static/dark.png");
})

PICTURE_API.get("/githubLogo", (req: Request, res: Response) => {
    res.sendFile("../static/github_logo.png");
})

PICTURE_API.get("/codeprenticeLogo", (req: Request, res: Response) => {
    res.sendFile("../static/logo.png");
})

PICTURE_API.get("/:username", (req: Request, res: Response) => {
    res.sendFile("../static/logo.png");
})
