import meetingService from "../service/meetingService";
import errorHandler from "../utils/errorHandler";
import { Request, Response } from "express"

class MeetingController {
  async getMeetingList(req:Request, res: Response):Promise<any> {
    try {
      const data = await meetingService.getMeetingList();
      if (!data || !data.length) {
        throw new Error();
      } else {
        const date = new Date();
        const yesterday = date.setDate(date.getDate() - 1)
        const filteredData = data.filter(
          item => {
            return new Date(item.dateTime) >= new Date(yesterday)
          },
        );
        return res.json(filteredData);
      }
    } catch (e:any) {
      res.send(
        errorHandler(res.statusCode, e.message || "No available meetings"),
      );
    }
  }

  async getMeeting(req:Request, res:Response) {
    try {
      const meetingId = req.params.id;
      const meetingItem = await meetingService.getMeeting(meetingId);
      res.send(meetingItem);
      return res.json(meetingItem);
    } catch (e:any) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }

  async createMeeting(req:Request, res:Response) {
    try {
      const { dateTime, type, name, host, hostIcon, idParts } = req.body;
      const data = await meetingService.createMeeting({
        dateTime,
        type,
        name,
        host,
        hostIcon,
        idParts,
      });
      return res.json(data);
    } catch (e:any) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }

  async updateMeeting(req:Request, res:Response) {
    try {
      const meetingData = req.body;
      const meetingId = req.params.id;
      const data = await meetingService.updateMeeting(meetingId, meetingData);
      return res.json(meetingData);
    } catch (e:any) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }

  async deleteMeeting(req:Request, res:Response) {
    try {
      const meetingId = req.params.id;
      const meetingItem = await meetingService.deleteMeeting(meetingId);
      res.send(`Item with id ${meetingId} was deleted successfully.`);
    } catch (e:any) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }

  async deleteOldMeetings(req:Request, res:Response) {
    try {
      const meetingDate = req.params.date;
      const deletedMeetings = await meetingService.deleteOldMeetings();
      res.send(`Items with before yesterday was deleted successfully.`);
    } catch (e:any) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }
}

export default new MeetingController();
