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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectByName = exports.getProjects = exports.createProject = void 0;
const project_model_1 = require("../models/project.model");
const mongoose_1 = require("mongoose");
// Creates a new project give a request body containing project: { name: string }
// Just for testing
exports.createProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Adding project to db");
    req.body._id = mongoose_1.Types.ObjectId();
    const newProject = new project_model_1.Projects(Object.assign({}, req.body));
    newProject.save()
        .then((res) => res.status(200).send("Project Added"))
        .catch((err) => res.status(500).send(err));
});
exports.getProjects = (req, res) => {
    console.log("getProjects()");
    project_model_1.Projects.find()
        .then((results) => {
        console.log("Resolved projects");
        res.status(200).json(results);
    })
        .catch((err) => res.status(404).send(err));
};
exports.getProjectByName = (req, res) => {
    console.log("getProjectByName() - ", req.params.name);
    project_model_1.Projects.find({ name: req.params.name })
        .then((results) => res.status(200).json(results))
        .catch((err) => res.status(404).send(err));
};
