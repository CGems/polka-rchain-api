module.exports = app => {
    app.router.get("/api/v1/extrinsic", app.controller.extrinsic.getExtrinsics);
    app.router.get("/api/v1/extrinsic/:key", app.controller.extrinsic.getExtrinsicInfo);
  };
  