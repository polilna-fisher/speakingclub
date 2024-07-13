const MeetingModel = require('../models/meetingModel');

class MeetingService {
    async getMeeting(id) {
        const meeting = await MeetingModel.findOne({_id: id});
        return meeting;
    }
    async createMeeting(data) {
        const meeting = await MeetingModel.create(data);
        return meeting
    }
    async getMeetingList() {
        const meetingList = await MeetingModel.find();
        return meetingList;
    }
    async updateMeeting(id, data) {
        const meeting = await MeetingModel.updateOne({_id: id}, data);
        return meeting
    }
    async deleteMeeting(id) {
        const meeting = await MeetingModel.deleteOne({_id: id});
        return meeting
    }
    async deleteMeetingsBeforeDate(date){
        const deletedMeetingsList = await  MeetingModel.deleteMany({dateTime: date})
        return deletedMeetingsList
    }
}

module.exports = new MeetingService();