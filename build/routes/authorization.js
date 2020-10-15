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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.router = express_1.default.Router();
const github_api = `http://api.github.com`;
// Await data from the GITHUB API
// if Admin - Editing
// else only view 
//
function authorization() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield node_fetch_1.default(github_api);
        const response = data.json();
        return response;
    });
}
// implement redis caching here
function cache(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        return;
    });
}
exports.router.get('/', cache, (req, res) => {
    res.send("Authorization Page");
});
