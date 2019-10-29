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
  async checkHash() {
    const data = await this.ctx.service.dashboard.checkHash(
      this.ctx.query.hash
    );
    if (data) {
      this.ctx.helper.responseFormatter({
        code: "1000",
        data
      });
    } else {
      this.ctx.helper.responseFormatter({ code: "1021" });
    }
  }
}

module.exports = DashboardController;
