"use strict";

const Service = require("egg").Service;
const moment = require("moment");

class TransferService extends Service {
  async getTransferList({ page, row, address }) {
    const Op = this.ctx.app.Sequelize.Op;
    const offset = (page - 1) * row;
    const condition = {
      offset,
      limit: row,
      order: [["block_num", "DESC"], ["extrinsic_idx", "DESC"]],
      attributes: { exclude: ["id"] }
    };
    if (address) {
      condition.where = {
        [Op.or]: [
          {
            from: address
          },
          {
            to: address
          }
        ]
      };
    }
    const res = await this.app.model.Transfer.findAndCountAll(condition);
    return res;
  }

  async getDaily({ start, end }) {
    const Op = this.ctx.app.Sequelize.Op;
    const res = await this.app.model.Transfer.findAll({
      where: {
        block_timestamp: {
          [Op.and]: [
            {
              [Op.gte]: moment.utc(start).add("day", 1)
            },
            {
              [Op.lt]: moment.utc(end).add("day", 1)
            }
          ]
        }
      },
      attributes: [
        [
          this.app.Sequelize.fn(
            "DATE_FORMAT",
            this.app.Sequelize.col("block_timestamp"),
            "%Y-%m-%d"
          ),
          "time_utc"
        ],
        [this.app.Sequelize.fn("COUNT", "id"), "transfer_count"]
      ],
      group: "time_utc"
    });
    return res;
  }
}

module.exports = TransferService;
