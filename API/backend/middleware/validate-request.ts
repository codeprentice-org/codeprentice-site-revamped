import { Request, Response, NextFunction } from "express";
import safeCompare from 'safe-compare';


export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    console.log("validateRequest()");
    let requestToken = req.header('access_token') as string;
    if (safeCompare(requestToken, process.env.ACCESS_TOKEN as string)) {
        console.log("Access Granted");
        next();
    } else {
        console.log("Access Token invalid");
        res.status(400).send("Need access token to get data");   
    }
}