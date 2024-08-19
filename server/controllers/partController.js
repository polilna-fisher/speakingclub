const partService = require("../service/partService");
const errorHandler = require("../utils/errorHandler");

class PartController {
  async getPartsList(req, res) {
    try {
      const data = await partService.getPartsList();
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
        errorHandler(res.statusCode, e.message || "No available parts"),
      );
    }
  }

  async getPart(req, res) {
    try {
      const partId = req.params.id;
      const part = await partService.getPart(partId);
      res.send(part);
      return res.json(part);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }

  async createPart(req, res) {
    try {
      const { dateTime, booked, topic, questions, type, name } = req.body;
      const data = await partService.createPart({
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
      const data = await partService.bookPart(partId, booked);
      return res.json(data);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }

  async updatePart(req, res) {
    try {
      const partData = req.body;
      const partId = req.params.id;
      const data = await partService.updatePart(partId, partData);
      return res.json(partData);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }

  async deletePart(req, res) {
    try {
      const partId = req.params.id;
      const part = await partService.deletePart(partId);
      res.send(`Item with id ${partId} was deleted successfully.`);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }

  async deleteOldParts(req, res) {
    try {
      const partDate = req.params.date;
      const deletedParts = await partService.deleteOldParts();
      res.send(`Items with before yesterday was deleted successfully.`);
    } catch (e) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }
}

module.exports = new PartController();
