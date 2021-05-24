import { Document, Model, model, Types, Schema, Query } from "mongoose";

export const ProjectSchema = new Schema({
    _id: {
        type: Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    team: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    timeline: [
        {
            title: {
                type: String,
                required: true
            },
            cardTitle: {
                type: String,
            },
            cardSubtitle: {
                type: String,
            },
            cardDetailedText: {
                type: String,
            }
        }
    ]
    // The collection in which projects will be saved
}, { collection: "projects" });
