"use strict";

const Service = require("egg").Service;

class TransferService extends Service {
  async getTransferList({ page, row }) {
    const offset = (page - 1) * row;
    const res = await this.app.model.Transfer.findAndCountAll({
      offset,
      limit: row,
      order: [["block_num", "DESC"], ["extrinsic_idx", "DESC"]],
      attributes: { exclude: ["id"] }
    });
    return res;
  }
}

module.exports = TransferService;
