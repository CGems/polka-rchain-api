"use strict";

const Controller = require("egg").Controller;

class ExtrinsicController extends Controller {
  async getExtrinsics() {
    let row = +this.ctx.query.row || 25;
    if (row > 200) {
      row = 200;
    }
    const condition = {
      page: +this.ctx.query.page || 1,
      row,
      address: this.ctx.query.address
    };
    if (this.ctx.query.signed === "signed") {
      condition.signed = true;
    }
    const { rows, count } = await this.ctx.service.extrinsic.getExtrinsicList(
      condition
    );
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
      const transfer = await this.app.model.Transfer.findOne({
        where: {
          hash: data.extrinsic_hash.substring(2)
        }
      });
      const events = await this.app.model.Event.findAll({
        where: {
          block_id: data.block_num,
          extrinsic_idx: data.extrinsic_idx
        }
      });
      this.ctx.helper.responseFormatter({
        code: "1000",
        data: {
          ...data,
          transfer,
          events
        }
      });
    } else {
      this.ctx.helper.responseFormatter({ code: "1021" });
    }
  }
}

module.exports = ExtrinsicController;
