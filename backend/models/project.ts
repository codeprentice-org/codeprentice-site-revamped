import { Document, Model, model, Types, Schema, Query } from "mongoose";
import { UserSchema } from "./user";
import { UserType } from "../types/user";

const ProjectSchema = new Schema({
    _id: Types.ObjectId,
    name: String,
    // Searches for team members with the listed idea in the collection "User"
    team: [{ type: UserSchema, ref: "Users" }], 
    // The collection in which projects will be saved
}, { collection: "projects" });

ProjectSchema.virtual("asString")
    .get( function(this: { _id: Types.ObjectId, name: string, team: UserType[] }) {
        var projectString = `Project _id: ${this._id} \n
                             Project name: ${this.name} \n
                             Project team (members): \n`;
        for (const user of this.team) {
            projectString += `Member email: ${user.email} \n`;
        }
        return projectString;
});

const ProjectModel = model("Project", ProjectSchema);



// export values
export { ProjectSchema, ProjectModel }