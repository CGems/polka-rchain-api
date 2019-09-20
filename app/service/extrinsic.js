"use strict";

const Service = require("egg").Service;

class ExtrinsicService extends Service {
  async getExtrinsicList({ page, row }) {
    const offset = (page - 1) * row;
    const res = await this.app.model.Extrinsic.findAndCountAll({
      offset,
      limit: row,
      order: [["block_num", "DESC"]]
    });
    return res;
  }
  async getExtrinsicInfo({ key }) {
    const reg = /^[0-9,/-]*$/;
    const isNum = reg.test(key);
    const condition = {};
    if (isNum) {
      condition.block_num = key.split("-")[0];
      condition.extrinsic_idx = key.split("-")[1];
    } else {
      condition.extrinsic_hash = key.substring(2);
    }
    const res = await this.app.model.Extrinsic.findOne({
      where: condition
    });
    return res;
  }
}

module.exports = ExtrinsicService;
