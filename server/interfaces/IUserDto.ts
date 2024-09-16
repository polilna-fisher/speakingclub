import {ObjectId} from "mongodb";

export interface IUserDto{
    email: string;
    id: string;
    isActivated?: boolean | null | undefined;
    activationLink?: string;
    password?: string;
    _id?: string
}
