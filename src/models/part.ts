import React from "react";

export interface IPart {
    type: string,
    name: string,
    dateTime: string,
    booked: boolean,
    topic: string,
    questions: Array<string>
    _id?: string
}




