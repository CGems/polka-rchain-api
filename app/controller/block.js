"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async getBlocks() {
    this.ctx.body = await this.ctx.service.block.getBlockList({
      page: this.ctx.query.page || 1,
      row: this.ctx.query.row || 25
    });
  }
  async getBlockInfo() {
    this.ctx.body = await this.ctx.service.block.getBlockInfo({
      key: this.ctx.params.key
    });
  }
}

module.exports = HomeController;
