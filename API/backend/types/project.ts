import { UserType, UserInt } from "./user";
import { Types } from 'mongoose';

export type ProjectType = {
    _id: Types.ObjectId;
    name: string;
    team: Array<UserType>;
}

export interface ProjectInt {
    _id: Types.ObjectId;
    name: string;
    team: Array<UserType>;
}