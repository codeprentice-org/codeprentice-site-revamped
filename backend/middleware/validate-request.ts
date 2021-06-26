import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt';
import crypto from "crypto";

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    let requestToken = req.header('access-token') as string;
    let backHash = bcrypt.hashSync(process.env.BACKEND_TOKEN as string, 10);
    if (bcrypt.compareSync(requestToken, backHash)) {
        next();
    }
    res.status(400).send("Need access token to get data");
}