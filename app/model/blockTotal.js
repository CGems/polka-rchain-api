module.exports = app => {
  const { INTEGER, DECIMAL } = app.Sequelize;
  const BlockTotal = app.model.define("data_block_total", {
    block_num: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: false,
      field: "id"
    },
    blocktime: {
      type: INTEGER
    },
    total_extrinsics_signed: {
      type: DECIMAL(65, 0)
    },
    total_events: {
      type: DECIMAL(65, 0)
    }
  });
  return BlockTotal;
};
