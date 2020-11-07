import { Document, Model, model, Types, Schema, Query } from "mongoose";

const AccessTokenSchema: Schema = new Schema({
  _id: Types.ObjectId,
  userId: String
}, {collection: "access_tokens"});

const AccessTokenModel = model("AccessToken", AccessTokenSchema);

export { AccessTokenSchema, AccessTokenModel };