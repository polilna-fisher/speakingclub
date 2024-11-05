import PartModel from "../models/partModel"
import {IPart} from "../interfaces/IPart";
import {UpdateWriteOpResult} from "mongoose";
import {DeleteResult} from "mongodb";

class PartService {
  async getPartsList():Promise<IPart[]> {
    const partsList = await PartModel.find();
    return partsList;
  }
  async getPart(id:string):Promise<IPart | null> {
    const part = await PartModel.findOne({ _id: id });
    return part;
  }
  async getPartListByIds(partList: Array<string>): Promise<IPart[]> {
    const partsListInfo = await Promise.all(
        partList.map(async (id) => {
          const part = await PartModel.findOne({ _id: id }).lean();
          console.log(part, `Part for id ${id}`);
          return part;
        })
    );
    return partsListInfo.filter(part => part !== null);
  }

  async createPart(data:IPart):Promise<IPart | null> {
    const part = await PartModel.create(data);
    return part;
  }
  async updatePart(id:string, data:IPart):Promise<UpdateWriteOpResult> {
    const part = await PartModel.updateOne({ _id: id }, data);
    return part;
  }
  async deletePart(id:string):Promise<DeleteResult> {
    const part = await PartModel.deleteOne({ _id: id });
    return part;
  }
  async deleteOldParts():Promise<DeleteResult> {
    const date = new Date();
    const yesterday = date.setDate(date.getDate() - 1)
    const deletedPartsList = PartModel.deleteMany({
      dateTime: { $lt: yesterday},
    });
    return deletedPartsList;
  }
}

export default new PartService();
