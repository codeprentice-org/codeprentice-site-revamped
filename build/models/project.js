"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = exports.ProjectSchema = void 0;
var mongoose_1 = require("mongoose");
var user_1 = require("./user");
var ProjectSchema = new mongoose_1.Schema({
    _id: mongoose_1.Types.ObjectId,
    name: String,
    // Searches for team members with the listed idea in the collection "User"
    team: [{ type: user_1.UserSchema, ref: "Users" }],
}, { collection: "projects" });
exports.ProjectSchema = ProjectSchema;
ProjectSchema.virtual("asString")
    .get(function () {
    var projectString = "Project _id: " + this._id + " \n\n                             Project name: " + this.name + " \n\n                             Project team (members): \n";
    for (var _i = 0, _a = this.team; _i < _a.length; _i++) {
        var user = _a[_i];
        projectString += "Member email: " + user.email + " \n";
    }
    return projectString;
});
var ProjectModel = mongoose_1.model("Project", ProjectSchema);
exports.ProjectModel = ProjectModel;
