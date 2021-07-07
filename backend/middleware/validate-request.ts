import { Request, Response, NextFunction } from "express";
import safeCompare from 'safe-compare';


export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    let requestToken = req.header('access_token') as string;
    if (safeCompare(requestToken, process.env.ACCESS_TOKEN as string)) {
        next();
    }
    res.status(400).send("Need access token to get data");
}