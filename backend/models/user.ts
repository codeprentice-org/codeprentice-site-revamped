import { Document, Model, model, Types, Schema, Query } from "mongoose";
import { ROLE } from "../enums/role";

const UserSchema: Schema = new Schema({
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
    ROLE: ROLE
    // The collection in which users will be saved
}, { collection: "users" }); 

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