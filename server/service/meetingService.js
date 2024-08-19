const MeetingModel = require("../models/meetingModel");

class MeetingService {
  async getMeetingList() {
    const meetingList = await MeetingModel.find();
    return meetingList;
  }
  async getMeeting(id) {
    const meeting = await MeetingModel.findOne({ _id: id });
    return meeting;
  }
  async createMeeting(data) {
    const meeting = await MeetingModel.create(data);
    return meeting;
  }
  async updateMeeting(id, data) {
    const meeting = await MeetingModel.updateOne({ _id: id }, data);
    return meeting;
  }
  async deleteMeeting(id) {
    const meeting = await MeetingModel.deleteOne({ _id: id });
    return meeting;
  }
  async deleteOldMeetings() {
    const date = new Date();
    const yesterday = date.setDate(date.getDate() - 1)
    const deletedMeetingsList = MeetingModel.deleteMany({
      dateTime: { $lt: yesterday},
    });
    return deletedMeetingsList;
  }
}

module.exports = new MeetingService();
