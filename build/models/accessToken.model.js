"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenModel = exports.AccessTokenSchema = void 0;
var mongoose_1 = require("mongoose");
var AccessTokenSchema = new mongoose_1.Schema({
    _id: mongoose_1.Types.ObjectId,
    userId: String
}, { collection: "access_tokens" });
exports.AccessTokenSchema = AccessTokenSchema;
var AccessTokenModel = mongoose_1.model("AccessToken", AccessTokenSchema);
exports.AccessTokenModel = AccessTokenModel;
