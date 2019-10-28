"use strict";

const Controller = require("egg").Controller;

class AccountController extends Controller {
  async getAccountInfo() {
    const accountInfo = await this.ctx.service.account.getAccountInfo({
      address: this.ctx.params.address
    });
    this.ctx.helper.responseFormatter({
      code: "1000",
      data: accountInfo
    });
  }
}

module.exports = AccountController;
