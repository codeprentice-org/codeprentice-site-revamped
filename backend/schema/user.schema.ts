import { Document, Model, model, Types, Schema, Query } from "mongoose";
import { ROLE } from "../enums/role";

export const UserSchema: Schema = new Schema({
    _id: {
       type: Types.ObjectId,
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
        type: ROLE,
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
}, { collection: "users" }); 