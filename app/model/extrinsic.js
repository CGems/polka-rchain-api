const { addressIdToAddress } = require("substrate-ss58");
module.exports = app => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;
  const Extrinsic = app.model.define("data_extrinsic", {
    account_id: {
      type: INTEGER,
      field: "address",
      get: function() {
        let address = this.getDataValue("account_id");
        return address ? addressIdToAddress(address) : "";
      }
    },
    block_num: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: false,
      field: "block_id"
    },
    extrinsic_hash: {
      type: STRING(64),
      get: function() {
        const extrinsicHash = this.getDataValue("extrinsic_hash");
        return extrinsicHash
          ? `${extrinsicHash.startsWith("0x") ? "" : "0x"}${extrinsicHash}`
          : "";
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
    call_module: { type: STRING(64), field: "module_id" },
    call_module_function: {
      type: STRING(64),
      field: "call_id"
    },
    nonce: {
      type: INTEGER,
      get: function() {
        return this.getDataValue("nonce") || "";
      }
    },
    signature: {
      type: STRING(128),
      get: function() {
        return this.getDataValue("signature") || "";
      }
    },
    signed: { type: BOOLEAN, allowNull: false },
    success: { type: BOOLEAN, allowNull: false },
    params: { type: JSON }
  });
  return Extrinsic;
};
