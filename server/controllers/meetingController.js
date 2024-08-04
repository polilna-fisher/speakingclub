const meetingService = require("../service/meetingService");
const errorHandler = require("../utils/errorHandler");

class MeetingController {
  async getMeetingList(req, res) {
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
    } catch (e) {
      res.send(
        errorHandler(res.statusCode, e.message || "No available meetings"),
      );
    }
  }
  async getPartsList(req, res) {
    try {
      const data = await meetingService.getPartsList();
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
    } catch (e) {
      res.send(
        errorHandler(res.statusCode, e.message || "No available meetings"),
      );
    }
  }
  async getMeeting(req, res) {
    try {
      const meetingId = req.params.id;
      const meetingItem = await meetingService.getMeeting(meetingId);
      res.send(meetingItem);
      return res.json(meetingItem);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }
  async getPart(req, res) {
    try {
      const partId = req.params.id;
      const part = await meetingService.getPart(partId);
      res.send(part);
      return res.json(part);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }
  async createMeeting(req, res) {
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
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }
  async createPart(req, res) {
    try {
      const { dateTime, booked, topic, questions, type, name } = req.body;
      const data = await meetingService.createPart({
        type,
        name,
        dateTime,
        booked,
        topic,
        questions,
      });
      return res.json(data);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }
  async bookPart(req, res) {
    try {
      const booked = req.body.booked;
      const partId = req.params.id;
      const data = await meetingService.bookPart(partId, booked);
      return res.json(partId);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }
  async updateMeeting(req, res) {
    try {
      const meetingData = req.body;
      const meetingId = req.params.id;
      const data = await meetingService.updateMeeting(meetingId, meetingData);
      return res.json(meetingData);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }
  async updatePart(req, res) {
    try {
      const partData = req.body;
      const partId = req.params.id;
      const data = await meetingService.updatePart(partId, partData);
      return res.json(partData);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }
  async deleteMeeting(req, res) {
    try {
      const meetingId = req.params.id;
      const meetingItem = await meetingService.deleteMeeting(meetingId);
      res.send(`Item with id ${meetingId} was deleted successfully.`);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }
  async deletePart(req, res) {
    try {
      const partId = req.params.id;
      const part = await meetingService.deletePart(partId);
      res.send(`Item with id ${partId} was deleted successfully.`);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }
  async deleteOldMeetings(req, res) {
    try {
      const meetingDate = req.params.date;
      const deletedMeetings = await meetingService.deleteOldMeetings();
      res.send(`Items with after today was deleted successfully.`);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }
  async deleteOldParts(req, res) {
    try {
      const partDate = req.params.date;
      const deletedParts = await meetingService.deleteOldParts();
      res.send(`Items with after today was deleted successfully.`);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }
}

module.exports = new MeetingController();
