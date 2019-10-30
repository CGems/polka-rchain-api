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
      let [accountIndex, nonce] = await Promise.all([
        this.ctx.model.AccountIndex.findOne({
          where: {
            account_id: account.id
          }
        }),
        this.ctx.model.Extrinsic.count({ where: { address: account.id } })
      ]);
      accountIndex = accountIndex.get({ plain: true });
      return {
        address: account.address,
        balance: account.balance,
        account_index: accountIndex.id,
        nonce
      };
    }
  }
}

module.exports = AccountService;
