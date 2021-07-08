"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = exports.ProjectSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProjectSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Types.ObjectId,
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
}, {
    writeConcern: {
        w: "majority",
        j: true,
        wtimeout: 1000,
    }
});
exports.Projects = mongoose_1.model("projects", exports.ProjectSchema);
