"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROJECT_API = void 0;
var express_1 = __importDefault(require("express"));
var project_1 = require("../models/project");
var user_1 = require("../models/user");
var check_auth_1 = require("../middleware/check-auth");
var check_role_1 = require("../middleware/check-role");
var mongoose_1 = require("mongoose");
exports.PROJECT_API = express_1.default.Router();
// Creates a new project given a request body containing project: { name: string }
exports.PROJECT_API.post("/create_project", check_auth_1.checkAuth, check_role_1.checkRoleAdmin, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var projectInfo, teamMember, newProject;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectInfo = req.body.project;
                return [4 /*yield*/, user_1.UserModel.findOne({ _id: req.body.user._id }).exec()];
            case 1:
                teamMember = _a.sent();
                newProject = new project_1.ProjectModel({
                    _id: new mongoose_1.Types.ObjectId(),
                    name: projectInfo.name,
                    team: [(teamMember) ? teamMember.toObject() : undefined]
                });
                newProject.save()
                    .then(function (resolve) {
                    console.log(resolve);
                    res.status(200)
                        .send("Project was successfully created");
                })
                    .catch(function () {
                    res.status(401)
                        .send("Unable to create new project");
                });
                return [2 /*return*/];
        }
    });
}); });
