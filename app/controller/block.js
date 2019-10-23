"use strict";

const Controller = require("egg").Controller;

class BlockController extends Controller {
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
      let extrinsics = [];
      let events = [];
      if (data.extrinsics_count > 0) {
        extrinsics = await this.app.model.Extrinsic.findAll({
          where: {
            block_num: data.block_num
          }
        });
        extrinsics = extrinsics.map(item => {
          item = item.get({ plain: true });
          item.extrinsic_index = `${item.block_num}-${item.extrinsic_idx}`;
          return item;
        });
      }
      if (data.event_count > 0) {
        events = await this.app.model.Event.findAll({
          where: {
            block_num: data.block_num
          }
        });
      }
      this.ctx.helper.responseFormatter({
        code: "1000",
        data: {
          ...data.get({
            plain: true
          }),
          extrinsics,
          events
        }
      });
    } else {
      this.ctx.helper.responseFormatter({ code: "1021" });
    }
  }
}

module.exports = BlockController;
