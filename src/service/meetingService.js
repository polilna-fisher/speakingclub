import {baseURL} from "../constants";
import {findHostIcon} from "../utils/hosts";

export async function fetchMeetingsList() {
    const response = await fetch('http://localhost:5000/api/getMeetingsList')
    return await response.json();
}
export async function fetchPartsList() {
    const response = await fetch('http://localhost:5000/api/getPartsList')
    return await response.json();
}

export const bookPart = async (part, idPart) => {
    const response = await fetch(`${baseURL}/api/updatePart/${idPart}`, {
        method: 'PUT',
        body: JSON.stringify({
            date: part.date,
            type: part.type,
            name: part.name,
            dateTime: part.dateTime,
            booked: true,
            topic: part.topic,
            questions: part.questions
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return  await response.json()
}
export const createPart = async (part) => {
    const response = await fetch(`${baseURL}/api/createPart`, {
        method: 'POST',
        body: JSON.stringify({
            type: part.type,
            name: part.name,
            dateTime: part.dateTime,
            booked: part.booked,
            topic: part.topic,
            questions: part.questions
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return  await response.json()
}

export const createMeeting = async (meeting, partIds) => {
    const response = await fetch(`${baseURL}/api/createMeeting`, {
        method: 'POST',
        body: JSON.stringify({
            type: meeting.type,
            name: meeting.name,
            dateTime: meeting.dateTime,
            host: meeting.host,
            hostIcon: findHostIcon(meeting.host),
            idParts: [...partIds]
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return  await response.json()
}
