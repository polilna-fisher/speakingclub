const MeetingModel = require('../models/meetingModel');
const moment = require("moment/moment");

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
    async deleteMeetingsBeforeDate(){
        const dates = () => {
            const dateList = []
            let n = 1
            while (n < 10) {
                let date = new Date()
                date.setDate(date.getDate() - n);
                dateList.push(date.toLocaleDateString())
                n = n + 1
            }
            return dateList
        }
        const deletedMeetingsList = MeetingModel.deleteMany({date: [...dates()]})
        return deletedMeetingsList
    }
}

module.exports = new MeetingService();