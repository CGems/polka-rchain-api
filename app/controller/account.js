"use strict";

const Controller = require("egg").Controller;

class AccountController extends Controller {
  async getAccountInfo() {
    const accountInfo = await this.ctx.service.account.getAccountInfo({
      address: this.ctx.params.address
    });
    if (accountInfo) {
      this.ctx.helper.responseFormatter({
        code: "1000",
        data: accountInfo
      });
    } else {
      this.ctx.helper.responseFormatter({ code: "1021" });
    }
  }
}

module.exports = AccountController;
