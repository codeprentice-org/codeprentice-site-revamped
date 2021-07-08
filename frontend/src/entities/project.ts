import { TimelineItem } from "react-chrono"

export type Project = {
    _id: string;
    name: string;
    team: string[],
    description: string,
    timeline: TimelineItem[]
}
