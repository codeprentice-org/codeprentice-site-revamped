"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
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
        type: String,
        required: true
    }
    // The collection in which users will be saved
}, { collection: "users" });
exports.UserSchema = UserSchema;
// To Use: userSchema.asString()
UserSchema.virtual("asString")
    .get(function () {
    return "User _id: " + this._id + " \n \n                User email: " + this.email + " \n \n                User username: " + this.username + " \n \n                User ROLE: " + this.ROLE;
});
var UserModel = mongoose_1.model("User", UserSchema);
exports.UserModel = UserModel;
