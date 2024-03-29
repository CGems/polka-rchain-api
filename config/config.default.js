/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1568088108722_3100";

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    port: 33061,
    username: "root",
    password: "root",
    database: "polkascan",
    // 是否自动进行下划线转换（这里是因为DB默认的命名规则是下划线方式，而我们使用的大多数是驼峰方式）
    underscored: false,
    // 时区，sequelize有很多自动时间的方法，都是和时区相关的，记得设置成东8区（+08:00）
    timezone: "+00:00",
    define: {
      freezeTableName: true,
      timestamps: false
    }
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    errorDescs: require("./error_zh-cn.json"),
    substrateAddressType: 42,
  };

  return {
    ...config,
    ...userConfig
  };
};
