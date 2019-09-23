exports.sequelize = {
  dialect: "mysql",
  host: "mysql",
  port: 3306,
  username: "root",
  password: "root",
  database: "polkascan",
  // 是否自动进行下划线转换（这里是因为DB默认的命名规则是下划线方式，而我们使用的大多数是驼峰方式）
  underscored: false,
  // 时区，sequelize有很多自动时间的方法，都是和时区相关的，记得设置成东8区（+08:00）
  timezone: "+08:00",
  define: {
    freezeTableName: true,
    timestamps: false
  }
};
