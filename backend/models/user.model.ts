import { Document, Model, model, Types, Schema, Query } from "mongoose";
import { ROLE } from "../enums/role";
import { UserSchema } from '../schema/user.schema';

// To Use: userSchema.asString()
UserSchema.virtual("asString")
    .get( function(this: { _id: Types.ObjectId, email: string, username: string, name: string, ROLE: ROLE }) {
        return `User _id: ${this._id} \n 
                User email: ${this.email} \n 
                User username: ${this.username} \n 
                User ROLE: ${this.ROLE}`;
});

const UserModel = model("User", UserSchema);


// export values
export { UserSchema, UserModel }