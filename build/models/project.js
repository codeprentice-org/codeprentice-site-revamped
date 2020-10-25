"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var user_1 = require("./user");
var projectSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    name: String,
    team: [{ type: user_1.userSchema }],
    ROLE: String
});
exports.ProjectModel = mongoose_1.default.model("Project", projectSchema);
