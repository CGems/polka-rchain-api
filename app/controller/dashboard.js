"use strict";

const Controller = require("egg").Controller;

class DashboardController extends Controller {
  async getMetadata() {
    const data = await this.ctx.service.dashboard.getMetadata();
    this.ctx.helper.responseFormatter({
      code: "1000",
      data
    });
  }
}

module.exports = DashboardController;
