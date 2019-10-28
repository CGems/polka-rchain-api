module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const AccountIndex = app.model.define("data_account_index", {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    account_id: {
      type: STRING(64)
    }
  });
  return AccountIndex;
};
