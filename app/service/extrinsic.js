"use strict";

const Service = require("egg").Service;
const { addressToAddressId, setNetworkDefault } = require("substrate-ss58");
class ExtrinsicService extends Service {
  async getExtrinsicList({ page, row, signed, address }) {
    setNetworkDefault(this.app.config.substrateAddressType);
    const offset = (page - 1) * row;
    const condition = {
      offset,
      limit: row,
      where: {},
      order: [["block_num", "DESC"]]
    };
    if (signed) {
      condition.where.signed = true;
    }
    if (address) {
      condition.where.address = addressToAddressId(address).substring(2);
    }
    let res = await this.app.model.Extrinsic.findAndCountAll(condition);
    res.rows = res.rows.map(item => {
      item = item.get({
        plain: true
      });
      item.extrinsic_index = `${item.block_num}-${item.extrinsic_idx}`;
      return item;
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
    return {
      ...res.get({
        plain: true
      }),
      extrinsic_index: `${res.block_num}-${res.extrinsic_idx}`
    };
  }
}

module.exports = ExtrinsicService;
