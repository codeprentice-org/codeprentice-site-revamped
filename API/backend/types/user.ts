import { ROLE } from "../enums/role";
import { Types } from "mongoose";

export type UserType = {
    _id: Types.ObjectId;
    email: string;
    username: string;
    name: string;
    ROLE: ROLE;
}

export interface UserInt {
    _id: Types.ObjectId;
    email: string;
    username: string; 
    name: string;
    ROLE: ROLE;
}