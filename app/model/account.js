module.exports = app => {
  const { STRING, DECIMAL } = app.Sequelize;
  const Account = app.model.define("data_account", {
    id: {
      type: STRING(64),
      primaryKey: true,
      autoIncrement: false
    },
    address: {
      type: STRING(48)
    },
    balance: {
      type: DECIMAL(65, 0)
    }
  });
  return Account;
};
