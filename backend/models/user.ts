import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    username: String,
    ROLE: String
});

export const UserModel = mongoose.model("User", userSchema);