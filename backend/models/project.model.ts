import { Document, Model, model, Types, Schema, Query } from "mongoose";
import { UserModel, UserSchema } from "./user.model";
import { UserType, UserInt } from "../types/user";

const ProjectSchema = new Schema({
    _id: {
        type: Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    // Searches for team members with the listed idea in the collection "User"
    team: [UserSchema], 
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
