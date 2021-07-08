"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenModel = exports.AccessTokenSchema = void 0;
const mongoose_1 = require("mongoose");
const AccessTokenSchema = new mongoose_1.Schema({
    _id: mongoose_1.Types.ObjectId,
    userId: String
}, { collection: "access_tokens" });
exports.AccessTokenSchema = AccessTokenSchema;
const AccessTokenModel = mongoose_1.model("AccessToken", AccessTokenSchema);
exports.AccessTokenModel = AccessTokenModel;
