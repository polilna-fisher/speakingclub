import {baseURL} from "../constants";

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
export const createPart = async (date, type, name, dateTime, booked, topic, questions) => {
    const response = await fetch(`${baseURL}/api/createPart`, {
        method: 'POST',
        body: JSON.stringify({
            date: date,
            type: type,
            name: name,
            dateTime: dateTime,
            booked: booked,
            topic: topic,
            questions: questions
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return  await response.json()
}