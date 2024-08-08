import { baseURL } from "../constants";

export async function fetchMeetingsList() {
  const response = await fetch(`${baseURL}/api/getMeetingsList`);
  return await response.json();
}
export async function fetchPartsList() {
  const response = await fetch(`${baseURL}/api/getPartsList`);
  return await response.json();
}

export const bookPart = async (data) => {
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

export const createPart = async (part) => {
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

export const createMeeting = async (meeting, partIds) => {
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

export const createAll = async (part1, part2, meeting) => {
  const firstPart = await createPart(part1);
  const secondPart = await createPart(part2);
  const partIds = [firstPart._id, secondPart._id];
  const wholeMeeting = await createMeeting(meeting, partIds);
  console.log(partIds, wholeMeeting, "wholeMeeting");
};
