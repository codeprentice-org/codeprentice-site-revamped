import mongoose from "mongoose";
import { UserType } from "../types/user";
import { userSchema } from "./user"

const projectSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    team: [{ type: userSchema }],
    ROLE: String
});

export const ProjectModel = mongoose.model("Project", projectSchema);