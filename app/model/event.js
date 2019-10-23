module.exports = app => {
  const { STRING, INTEGER, JSON } = app.Sequelize;
  const Event = app.model.define("data_event", {
    block_num: {
      type: INTEGER,
      field: "block_id",
      primaryKey: true,
      autoIncrement: false
    },
    event_index: {
      type: STRING(12),
      field: "event_idx",
      primaryKey: true,
      autoIncrement: false,
      get: function() {
        return `${this.getDataValue("block_num")}-${this.getDataValue(
          "event_index"
        )}`;
      }
    },
    extrinsic_idx: {
      type: INTEGER
    },
    module_id: { type: STRING(64) },
    event_id: { type: STRING(64) },
    params: {
      type: JSON,
      field: "attributes"
    }
  });
  return Event;
};
