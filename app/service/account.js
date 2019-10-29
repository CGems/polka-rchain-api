"use strict";

const Service = require("egg").Service;

class AccountService extends Service {
  async getAccountInfo({ address }) {
    let account = await this.ctx.model.Account.findOne({
      where: {
        address
      }
    });
    if (account) {
      account = account.get({ plain: true });
      let accountIndex = await this.ctx.model.AccountIndex.findOne({
        where: {
          account_id: account.id
        }
      });
      accountIndex = accountIndex.get({ plain: true });
      return {
        address: account.address,
        balance: account.balance,
        account_index: accountIndex.id
      };
    }
  }
}

module.exports = AccountService;
