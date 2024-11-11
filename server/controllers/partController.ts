import partService from "../service/partService";
import errorHandler from "../utils/errorHandler";
import {Request, Response} from "express";

class PartController {
  async getPartsList(req:Request, res:Response) {
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
    } catch (e:any) {
      res.send(
        errorHandler(res.statusCode, e.message || "No available parts"),
      );
    }
  }

  async getPart(req:Request, res:Response) {
    try {
      const partId = req.params.id;
      const part = await partService.getPart(partId);
      res.send(part);
      return res.json(part);
    } catch (e:any) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }

  async createPart(req:Request, res:Response) {
    try {
      const { dateTime, booked, topic, questions, type, name } = req.body;
      const data = await partService.createPart({
        type,
        name,
        dateTime,
        topic,
        questions,
      });
      return res.json(data);
    } catch (e:any) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }

  async updatePart(req:Request, res:Response) {
    try {
      const partData = req.body;
      const partId = req.params.id;
      const data = await partService.updatePart(partId, partData);
      return res.json(partData);
    } catch (e:any) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }

  async deletePart(req:Request, res:Response) {
    try {
      const partId = req.params.id;
      const part = await partService.deletePart(partId);
      res.send(`Item with id ${partId} was deleted successfully.`);
    } catch (e:any) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }

  async deleteOldParts(req:Request, res:Response) {
    try {
      const partDate = req.params.date;
      const deletedParts = await partService.deleteOldParts();
      res.send(`Items with before yesterday was deleted successfully.`);
    } catch (e:any) {
      res.send(errorHandler(res.statusCode, e.message));
    }
  }
}

export default new PartController();
