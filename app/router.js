"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require("./router/block")(app);
  require("./router/extrinsic")(app);
};
