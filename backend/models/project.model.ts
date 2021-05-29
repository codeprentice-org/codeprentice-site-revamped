import { Document, Model, model, Types, Schema, Query } from "mongoose";
import { UserType, UserInt } from "../types/user";
import { ProjectSchema } from '../schema/project.schema';


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
