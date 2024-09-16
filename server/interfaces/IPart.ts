import {ObjectId} from "mongodb";

export interface IPart {
    type: string,
    name: string,
    dateTime: Date,
    booked: boolean,
    topic: string,
    questions: Array<string>
    _id?: ObjectId
}




