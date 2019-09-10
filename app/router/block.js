module.exports = app => {
  app.router.get("/api/v1/block", app.controller.block.getBlocks);
  app.router.get("/api/v1/block/:key", app.controller.block.getBlockInfo);
};
