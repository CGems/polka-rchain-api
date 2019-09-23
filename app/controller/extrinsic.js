"use strict";

const Controller = require("egg").Controller;

class ExtrinsicController extends Controller {
  async getExtrinsics() {
    let row = +this.ctx.query.row || 25;
    if (row > 200) {
      row = 200;
    }
    const { rows, count } = await this.ctx.service.extrinsic.getExtrinsicList({
      page: +this.ctx.query.page || 1,
      row,
      signed: this.ctx.query.signed === "signed" ? true : false
    });
    this.ctx.helper.responseFormatter({
      code: "1000",
      data: {
        rows,
        count
      }
    });
  }
  async getExtrinsicInfo() {
    const data = await this.ctx.service.extrinsic.getExtrinsicInfo({
      key: this.ctx.params.key
    });
    if (data) {
      this.ctx.helper.responseFormatter({ code: "1000", data });
    } else {
      this.ctx.helper.responseFormatter({ code: "1021" });
    }
  }
}

module.exports = ExtrinsicController;
