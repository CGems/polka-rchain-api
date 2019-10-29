"use strict";

const Service = require("egg").Service;

class DashboardService extends Service {
  async getMetadata() {
    const res = await this.app.model.BlockTotal.findOne({
      order: [["block_num", "DESC"]]
    });
    return res;
  }
  async checkHash(hash) {
    const block = await this.app.model.Block.findOne({
      where: {
        hash
      }
    });
    if (block) {
      return { hash_type: "block" };
    } else {
      const extrinsic = await this.app.model.Extrinsic.findOne({
        where: {
          extrinsic_hash: hash.substring(2)
        }
      });
      if (extrinsic) {
        return { hash_type: "extrinsic" };
      }
    }
  }
}

module.exports = DashboardService;
