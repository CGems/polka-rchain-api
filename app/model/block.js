const moment = require("moment");
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Block = app.model.define("data_block", {
    block_num: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: false,
      field: "id"
    },
    hash: { type: STRING(66) },
    block_timestamp: {
      type: DATE,
      field: "dateTime",
      get: function() {
        const dateTime = this.getDataValue("block_timestamp");
        return moment(dateTime).format("X");
      }
    },
    event_count: {
      type: INTEGER,
      field: "count_events"
    },
    extrinsics_count: {
      type: INTEGER,
      field: "count_extrinsics"
    },
    extrinsics_root: { type: STRING(66) },
    parent_block_num: { type: INTEGER, field: "parent_id" },
    parent_hash: { type: STRING(66) },
    state_root: { type: STRING(66) },
    spec_version_id: { type: STRING(64) }
  });
  return Block;
};
