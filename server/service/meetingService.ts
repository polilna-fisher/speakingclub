import MeetingModel from '../models/meetingModel';
import {IMeeting} from "../interfaces/IMeeting";
import {DeleteResult, UpdateResult} from "mongodb";
import {UpdateWriteOpResult} from "mongoose";


class MeetingService {
  async getMeetingList():Promise<IMeeting[] | []> {
    const meetingList = await MeetingModel.find();
    return meetingList;
  }
  async getMeeting(id:string):Promise<IMeeting | null>{
    const meeting = await MeetingModel.findOne({ _id: id });
    return meeting;
  }
  async createMeeting(data:IMeeting):Promise<IMeeting | null>{
    const meeting = await MeetingModel.create(data);
    return meeting;
  }
  async updateMeeting(id:string, data:IMeeting):Promise<UpdateWriteOpResult> {
    const meeting = await MeetingModel.updateOne({ _id: id }, data);
    return meeting;
  }
  async deleteMeeting(id:string):Promise<DeleteResult> {
    const meeting = await MeetingModel.deleteOne({ _id: id });
    return meeting;
  }
  async deleteOldMeetings():Promise<DeleteResult> {
    const date = new Date();
    const yesterday = date.setDate(date.getDate() - 1)
    const deletedMeetingsList = MeetingModel.deleteMany({
      dateTime: { $lt: yesterday},
    });
    return deletedMeetingsList;
  }
}

module.exports = new MeetingService();
