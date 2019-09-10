"use strict";

const Service = require("egg").Service;

class BlockService extends Service {
  async getBlockList({ page, row }) {
    const offset = (page - 1) * row;
    const res = await this.app.model.Block.findAll({
      offset,
      limit: row,
      order: [["block_num", "DESC"]],
      attributes: [
        "block_num",
        "hash",
        "parent_block_num",
        "parent_hash",
        "block_timestamp",
        "event_count",
        "extrinsics_count"
      ]
    });
    return res;
  }
  async getBlockInfo({ key }) {
    const reg = /^[0-9]+$/;
    const isNum = reg.test(key);
    const res = await this.app.model.Block.findOne({
      where: {
        [isNum ? "block_num" : "hash"]: key
      }
    });
    return res;
  }
}

module.exports = BlockService;
