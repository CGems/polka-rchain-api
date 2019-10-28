"use strict";

const Service = require("egg").Service;

class DashboardService extends Service {
  async getMetadata() {
    const res = await this.app.model.BlockTotal.findOne({
      order: [["block_num", "DESC"]]
    });
    return res;
  }
}

module.exports = DashboardService;
