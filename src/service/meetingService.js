export async function fetchMeetingsList() {
    const response = await fetch('http://localhost:5000/api/getAll')
    return await response.json();
}