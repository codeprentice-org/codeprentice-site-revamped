import express from "express"
import { Request, Response, NextFunction } from "express"

export const authAPI = express.Router()

// testing
authAPI.get("/test", (req: Request, res: Response, next: NextFunction) => {
        res.json({ data: "test" })
})
