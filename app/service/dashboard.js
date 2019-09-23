"use strict";

const Service = require("egg").Service;

class DashboardService extends Service {
  async getMetadata() {
    return {
      blockNum: "291322",
      blockTime: "6",
      count_account: "92",
      count_event: "32959",
      count_extrinsic: "432465",
      count_signed_extrinsic: "629",
      count_transfer: "171",
      implName: "darwinia-node",
      networkNode: "darwinia",
      specVersion: "78"
    };
  }

  async getDaily() {
    return [{"ID":102,"time_utc":"2019-09-08T00:00:00Z","transfer_count":60},{"ID":103,"time_utc":"2019-09-09T00:00:00Z","transfer_count":60},{"ID":110,"time_utc":"2019-09-10T00:00:00Z","transfer_count":54},{"ID":120,"time_utc":"2019-09-11T00:00:00Z","transfer_count":45},{"ID":121,"time_utc":"2019-09-12T00:00:00Z","transfer_count":44},{"ID":124,"time_utc":"2019-09-16T00:00:00Z","transfer_count":42},{"ID":125,"time_utc":"2019-09-17T00:00:00Z","transfer_count":42},{"ID":150,"time_utc":"2019-09-18T00:00:00Z","transfer_count":18},{"ID":151,"time_utc":"2019-09-19T00:00:00Z","transfer_count":18},{"ID":158,"time_utc":"2019-09-20T00:00:00Z","transfer_count":12},{"ID":169,"time_utc":"2019-09-23T00:00:00Z","transfer_count":2}];
  }
}

module.exports = DashboardService;
