import express from 'express';
import fetch from 'node-fetch';
import { Request, Response, NextFunction } from "express"

export const router = express.Router()
const github_api = `http://api.github.com`

// Await data from the GITHUB API
// if Admin - Editing
// else only view 
//

async function authorization() {
    const data = await fetch(github_api)
    const response = data.json()
    return response;
}

// implement redis caching here
async function cache(req: Request, res: Response, next: NextFunction) {
    return;
}

router.get('/', cache, (req: Request, res: Response) => {
    res.send("Authorization Page");
})