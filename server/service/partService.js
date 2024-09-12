import PartModel from "../models/partModel"

class PartService {
  async getPartsList() {
    const partsList = await PartModel.find();
    return partsList;
  }
  async getPart(id) {
    const part = await PartModel.findOne({ _id: id });
    return part;
  }
  async createPart(data) {
    const part = await PartModel.create(data);
    return part;
  }
  async bookPart(id, booked) {
    const part = await PartModel.updateOne({ _id: id }, { booked: booked });
    return {id, booked};
  }
  async updatePart(id, data) {
    const part = await PartModel.updateOne({ _id: id }, data);
    return part;
  }
  async deletePart(id) {
    const part = await PartModel.deleteOne({ _id: id });
    return part;
  }
  async deleteOldParts() {
    const date = new Date();
    const yesterday = date.setDate(date.getDate() - 1)
    const deletedPartsList = PartModel.deleteMany({
      dateTime: { $lt: yesterday},
    });
    return deletedPartsList;
  }
}

module.exports = new PartService();
