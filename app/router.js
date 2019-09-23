"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.router.get("/api/v1/block", app.controller.block.getBlocks);
  app.router.get("/api/v1/block/:key", app.controller.block.getBlockInfo);
  
  app.router.get("/api/v1/extrinsic", app.controller.extrinsic.getExtrinsics);
  app.router.get("/api/v1/extrinsic/:key", app.controller.extrinsic.getExtrinsicInfo);

  app.router.get("/api/v1/transfer", app.controller.transfer.getTransfers);

  app.router.get("/api/v1/metadata", app.controller.dashboard.getMetadata);

  app.router.get("/api/v1/daily", app.controller.dashboard.getDaily);
};
