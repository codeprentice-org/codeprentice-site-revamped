import { Request, Response, NextFunction } from "express";
import { UserType } from "../types/user";
import { ROLE } from "../enums/role";

// Verifies that the user has Admin privilages 
export const checkRoleAdmin = (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: UserType = req.body.user;
        console.log(user)
        if (user.ROLE === ROLE.ADMIN) {
            next();
        } else {
            return res.status(401).json({
                status: 1,
                data: "Authentication Failed"
            });
        }
    } catch (error) {
        return res.status(401).json({
            status: 1,
            data: "Authentication Failed"
        });
    }
}