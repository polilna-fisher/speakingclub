import {ObjectId} from "mongodb";

export interface IMeeting{
    _id?: ObjectId,
    dateTime: Date,
    type: string,
    name: string,
    host: string,
    hostIcon: string,
    idParts: Array<string> | [],
    "__v"?: number
}