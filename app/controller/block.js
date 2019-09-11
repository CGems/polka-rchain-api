"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async getBlocks() {
    let row = +this.ctx.query.row || 25;
    if (row > 200) {
      row = 200;
    }
    const { rows, count } = await this.ctx.service.block.getBlockList({
      page: +this.ctx.query.page || 1,
      row
    });
    this.ctx.helper.responseFormatter({
      code: "1000",
      data: {
        rows,
        count
      }
    });
  }
  async getBlockInfo() {
    const data = await this.ctx.service.block.getBlockInfo({
      key: this.ctx.params.key
    });
    if (data) {
      this.ctx.helper.responseFormatter({ code: "1000", data });
    } else {
      this.ctx.helper.responseFormatter({ code: "1021" });
    }
  }
}

module.exports = HomeController;
