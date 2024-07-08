const meetingService = require('../service/meetingService');
const errorHandler = require("../utils/errorHandler");


class MeetingController {
    async getMeetingList(req, res) {
        try {
            const data = await meetingService.getMeetingList()
            if (!data || !data.length) {
                throw new Error()
            } else {
                return res.json(data)
            }
        } catch (e) {
            res.send(errorHandler(res.statusCode, e.message || 'No available meetings'));
        }
    }

    async getMeeting(req, res) {
        try {
            const meetingId = req.params.id;
            const meetingItem = await meetingService.getMeeting(meetingId)
            res.send(meetingItem);
            return res.json(meetingItem)
        } catch (e) {
            res.send(errorHandler(res.statusCode, e.message));
        }
    }

    async updateMeeting(req, res) {
        try {
            const meetingData = req.body;
            const meetingId = req.params.id;
            const data = await meetingService.updateMeeting(meetingId, meetingData)
            return res.json(meetingData)
        } catch (e) {
            res.send(errorHandler(res.statusCode, e.message));

        }
    }

    async createMeeting(req, res) {
        try {
            const {part1, part2, dateTime} = req.body
            const data = await meetingService.createMeeting({
                dateTime,
                part1,
                part2
            })
            return res.json(data)
        } catch (e) {
            res.send(errorHandler(res.statusCode, e.message));
        }
    }

    async deleteMeeting(req, res) {
        try {
            const meetingId = req.params.id;
            const meetingItem = await meetingService.deleteMeeting(meetingId)
            res.send(`Item with id ${meetingId} was deleted successfully.`);
        } catch (e) {
            res.send(errorHandler(res.statusCode, e.message));
        }
    }
}

module.exports = new MeetingController();