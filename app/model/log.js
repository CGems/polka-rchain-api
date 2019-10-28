module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const Log = app.model.define("data_log", {
    block_num: {
      type: INTEGER,
      field: "block_id",
      primaryKey: true,
      autoIncrement: false
    },
    log_index: {
      type: INTEGER,
      field: "log_idx",
      primaryKey: true,
      autoIncrement: false,
      get: function() {
        return `${this.getDataValue("block_num")}-${this.getDataValue(
          "log_index"
        )}`;
      }
    },
    log_type: {
      type: STRING(64),
      field: "type"
    },
    origin_data: {
      field: "data",
      type: JSON
    },
    data: {
      field: "data",
      type: JSON,
      get: function() {
        const originData = this.getDataValue("origin_data");
        return originData.value;
      }
    },
    origin_type: {
      field: "data",
      type: JSON,
      get: function() {
        const originData = this.getDataValue("origin_data");
        return originData.type;
      }
    }
  });
  return Log;
};
