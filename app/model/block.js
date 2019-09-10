module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Block = app.model.define("data_block", {
    block_num: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: false,
      field: "id"
    },
    hash: { type: STRING(66), allowNull: false },
    block_timestamp: { type: DATE, field: "dateTime", defaultValue: null },
    event_count: {
      type: INTEGER,
      field: "count_events",
      allowNull: false
    },
    extrinsics_count: {
      type: INTEGER,
      field: "count_extrinsics",
      allowNull: false
    },
    extrinsics_root: { type: STRING(66), allowNull: false },
    parent_block_num: { type: INTEGER, allowNull: false, field: "parent_id" },
    parent_hash: { type: STRING(66), allowNull: false },
    state_root: { type: STRING(66), allowNull: false },
    spec_version_id: { type: STRING(64), allowNull: false }
  });
  return Block;
};
