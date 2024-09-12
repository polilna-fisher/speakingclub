import { baseURL } from "../constants";
import {IMeeting} from "../models/meeting";
import {IPart} from "../models/part";

export async function fetchMeetingsList(): Promise<IMeeting[] | []> {
  const response = await fetch(`${baseURL}/api/getMeetingsList`);
  return await response.json();
}
export async function fetchPartsList(): Promise<IPart[] | []> {
  const response = await fetch(`${baseURL}/api/getPartsList`);
  return await response.json();
}

export const bookPart = async (data:{id:string, isBooked:boolean}):Promise<boolean> => {
  const response = await fetch(`${baseURL}/api/bookPart/${data.id}`, {
    method: "PATCH",
    body: JSON.stringify({
      booked: !data.isBooked,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const createPart = async (part:IPart):Promise<IPart> => {
  const response = await fetch(`${baseURL}/api/createPart`, {
    method: "POST",
    body: JSON.stringify({
      type: part.type,
      name: part.name,
      dateTime: part.dateTime,
      booked: part.booked,
      topic: part.topic,
      questions: part.questions,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const createMeeting = async (meeting:IMeeting, partIds:(string | undefined)[]):Promise<IMeeting> => {
  const response = await fetch(`${baseURL}/api/createMeeting`, {
    method: "POST",
    body: JSON.stringify({
      type: meeting.type,
      name: meeting.name,
      dateTime: meeting.dateTime,
      host: meeting.host,
      hostIcon: meeting.hostIcon,
      idParts: [...partIds],
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const createAll = async (part1:IPart, part2:IPart, meeting:IMeeting):Promise<void> => {
  const firstPart = await createPart(part1);
  const secondPart = await createPart(part2);
  const partIds = [firstPart._id, secondPart._id];
  const wholeMeeting = await createMeeting(meeting, partIds);
  console.log(partIds, wholeMeeting, "wholeMeeting");
};
