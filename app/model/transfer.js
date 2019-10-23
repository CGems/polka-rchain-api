const moment = require("moment");
module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN, DECIMAL } = app.Sequelize;
  const Transfer = app.model.define("data_transfer", {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    block_num: {
      type: INTEGER,
      field: "block_id"
    },
    hash: {
      type: STRING(66),
      get: function() {
        const extrinsicHash = this.getDataValue("hash");
        return extrinsicHash
          ? `${extrinsicHash.startsWith("0x") ? "" : "0x"}${extrinsicHash}`
          : "";
      }
    },
    block_timestamp: {
      type: DATE,
      get: function() {
        const dateTime = this.getDataValue("block_timestamp");
        return moment(dateTime).format("X");
      }
    },
    extrinsic_index: {
      type: STRING(12),
      field: "extrinsic_idx",
      get: function() {
        return `${this.getDataValue("block_num")}-${this.getDataValue(
          "extrinsic_index"
        )}`;
      }
    },
    from: {
      type: STRING(64),
      field: "transfer_from"
    },
    to: {
      type: STRING(64),
      field: "transfer_to"
    },
    module: {
      type: STRING(64),
      field: "module_id"
    },
    amount: {
      type: DECIMAL(65, 0)
    },
    success: {
      type: BOOLEAN
    }
  });
  return Transfer;
};
