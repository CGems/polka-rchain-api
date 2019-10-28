"use strict";

const Controller = require("egg").Controller;

class TransferController extends Controller {
  async getTransfers() {
    let row = +this.ctx.query.row || 25;
    if (row > 200) {
      row = 200;
    }
    const { rows, count } = await this.ctx.service.transfer.getTransferList({
      page: +this.ctx.query.page || 1,
      row,
      address: this.ctx.query.address
    });
    this.ctx.helper.responseFormatter({
      code: "1000",
      data: {
        rows,
        count
      }
    });
  }
  async getDaily() {
    const { start, end } = this.ctx.query;
    const data = await this.ctx.service.transfer.getDaily({ start, end });
    this.ctx.helper.responseFormatter({
      code: "1000",
      data
    });
  }
}

module.exports = TransferController;
