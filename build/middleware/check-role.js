"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRoleAdmin = void 0;
const role_1 = require("../enums/role");
// Verifies that the user has Admin privilages 
exports.checkRoleAdmin = (req, res, next) => {
    try {
        const user = req.body.user;
        console.log(user);
        if (user.ROLE === role_1.ROLE.ADMIN) {
            next();
        }
        else {
            return res.status(401).json({
                status: 1,
                data: "Authentication Failed"
            });
        }
    }
    catch (error) {
        return res.status(401).json({
            status: 1,
            data: "Authentication Failed"
        });
    }
};
