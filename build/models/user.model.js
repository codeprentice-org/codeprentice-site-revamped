"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const role_1 = require("../enums/role");
exports.UserSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Types.ObjectId,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ROLE: {
        type: role_1.ROLE,
        required: true
    },
    projects: [{
            type: String,
            required: true
        }],
    bio: {
        type: String,
        required: true
    },
    github_link: {
        type: String,
    },
    facebook_link: {
        type: String,
    },
    linkedin_link: {
        type: String,
    },
    instagram_link: {
        type: String,
    }
    // The collection in which users will be saved
}, {
    writeConcern: {
        w: "majority",
        j: true,
        wtimeout: 1000,
    }
});
exports.Users = mongoose_1.model("users", exports.UserSchema);
