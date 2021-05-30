import { model, Types, Schema } from "mongoose";

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
},
    {
        writeConcern: {
            w: "majority",
            j: true,
            wtimeout: 1000,
        }
    }
);

export const Projects = model("projects",  ProjectSchema);