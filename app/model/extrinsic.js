const { addressIdToAddress, setNetworkDefault } = require("substrate-ss58");
module.exports = app => {
  setNetworkDefault(app.config.substrateAddressType);
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;
  const Extrinsic = app.model.define("data_extrinsic", {
    account_id: {
      type: STRING(48),
      field: "address",
      get: function() {
        let address = this.getDataValue("account_id");
        return address ? addressIdToAddress(address) : "";
      }
    },
    address: {
      type: STRING(64)
    },
    block_num: {
      type: INTEGER,
      field: "block_id",
      primaryKey: true,
      autoIncrement: false
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
    extrinsic_idx: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: false
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
    signed: { type: BOOLEAN },
    success: { type: BOOLEAN },
    params: { type: JSON }
  });
  return Extrinsic;
};
