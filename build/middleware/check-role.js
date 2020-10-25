"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRoleAdmin = void 0;
// Verifies that the user has Admin privilages 
exports.checkRoleAdmin = function (req, res, next) {
    try {
        var user = req.body.user;
        console.log(user);
        if (user.ROLE === "ADMIN") {
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
