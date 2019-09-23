"use strict";

const Service = require("egg").Service;

class TransferService extends Service {
  async getTransferList({ page, row }) {
    // const offset = (page - 1) * row;
    // const res = await this.app.model.Extrinsic.findAndCountAll({
    //   offset,
    //   limit: row,
    //   order: [["block_num", "DESC"]]
    // });
    return {
      count: 2000,
      rows: [
        {
          from: "5FF9PtFVUxuVAgDq3LF6ZWx8zfYc1GGvKAeAkd3N7V4FGPsz",
          to: "5CXzeQBikyrHaBQN8iJwZEmG8Rs7xc1AYBUiofsw9UsYtEZW",
          module: "balances",
          amount: "1",
          hash:
            "0x7ce4aef47c889d8a182109fa2368a1d4f45769149e80dbb905149431d3f2345d",
          block_timestamp: 1569221736,
          block_num: 289879,
          extrinsic_index: "289879-1",
          success: true
        },
        {
          from: "5C84QnrQjKotAQ63vt5kPvib4zv8eF6NfVMdupfHSXZpW7vM",
          to: "5D9hzNLndoqtwV4PsFhcrMRiQPwTRkAFwMdxphMgFPqsxpLY",
          module: "kton",
          amount: "0.1",
          hash:
            "0x13ce3d2f26d0bd3f1faa1f5f1768d3291fb9ea4fe639933ff3109ea6bd8b06f0",
          block_timestamp: 1569211236,
          block_num: 288130,
          extrinsic_index: "288130-2",
          success: true
        },
        {
          from: "5FF9PtFVUxuVAgDq3LF6ZWx8zfYc1GGvKAeAkd3N7V4FGPsz",
          to: "5CXzeQBikyrHaBQN8iJwZEmG8Rs7xc1AYBUiofsw9UsYtEZW",
          module: "balances",
          amount: "1",
          hash:
            "0xc25656924e9f1df015b076c05dcc9bde2b61b96d3b484aa925d9984a436c44ad",
          block_timestamp: 1568976744,
          block_num: 249080,
          extrinsic_index: "249080-1",
          success: true
        },
        {
          from: "5GpWrp3VJtdpejzon1fSwTiBJQuNsMKqayq7cwo4H9wiETL7",
          to: "5DFV1Ln4fTcfoiU8khmdi6anXFRQzsVJbG7h9cE1TipQewKA",
          module: "balances",
          amount: "1000000",
          hash:
            "0x4d9f3fe9f744f51817192c38a4e1f5cf4057cb8af4e28c38ba5182f89b62759d",
          block_timestamp: 1568971854,
          block_num: 248269,
          extrinsic_index: "248269-1",
          success: true
        },
        {
          from: "5GpWrp3VJtdpejzon1fSwTiBJQuNsMKqayq7cwo4H9wiETL7",
          to: "5CUrbcpVqpzsypRP1YNT5EXtiUT3bn4DXmisLas2tuX6TGrv",
          module: "balances",
          amount: "500000",
          hash:
            "0xbd9bd534a2ae468d12e2507d95cd979ca6e273de1ddb9e6dbf10548c1db20b08",
          block_timestamp: 1568971842,
          block_num: 248267,
          extrinsic_index: "248267-1",
          success: true
        },
        {
          from: "5CUrbcpVqpzsypRP1YNT5EXtiUT3bn4DXmisLas2tuX6TGrv",
          to: "5GpWrp3VJtdpejzon1fSwTiBJQuNsMKqayq7cwo4H9wiETL7",
          module: "balances",
          amount: "1000000",
          hash:
            "0x9a2923bc27cc1b88cd5d787e5cbc474b7aca67c28fb3e08feceef3b27ada7f21",
          block_timestamp: 1568971500,
          block_num: 248210,
          extrinsic_index: "248210-1",
          success: true
        },
        {
          from: "5CcB95CQK4nFCy3tC1BcU9qK3qMrnD5fJ5X2tG4i6TQskQbF",
          to: "5CUrbcpVqpzsypRP1YNT5EXtiUT3bn4DXmisLas2tuX6TGrv",
          module: "balances",
          amount: "1000000",
          hash:
            "0xa59749e1a67a81e2ebcf34356031f7f1ab0d1241bffeb2993fe862651dea1980",
          block_timestamp: 1568971452,
          block_num: 248202,
          extrinsic_index: "248202-1",
          success: true
        },
        {
          from: "5CVQGE2ScnaMRXFYq8gCbHJy8LXkWzbN6yZ2mQwGGny7e9Nv",
          to: "5CcB95CQK4nFCy3tC1BcU9qK3qMrnD5fJ5X2tG4i6TQskQbF",
          module: "balances",
          amount: "1000000",
          hash:
            "0x86871fec06a8712ae34d723afa2be73047061aa77f1291fd3062575f2e575628",
          block_timestamp: 1568971308,
          block_num: 248178,
          extrinsic_index: "248178-1",
          success: true
        },
        {
          from: "5CVQGE2ScnaMRXFYq8gCbHJy8LXkWzbN6yZ2mQwGGny7e9Nv",
          to: "5GpWrp3VJtdpejzon1fSwTiBJQuNsMKqayq7cwo4H9wiETL7",
          module: "balances",
          amount: "1000000",
          hash:
            "0x8f065dc16967370ea02b407533f4d3e92aee5975cbec1c473b59a3c30b773b36",
          block_timestamp: 1568971290,
          block_num: 248175,
          extrinsic_index: "248175-1",
          success: true
        },
        {
          from: "5H5q9bZ1cFWHz7FfRwWpLGK2gGtEmq9c1896givLXgjrtCoh",
          to: "5CVP7Caq8kMHUbajscYVEcsMPNRrs9WGxW6PbMZ87ARqSDat",
          module: "balances",
          amount: "1",
          hash:
            "0xbb0f05ecff581352e3dbe12e7ddf7faf19439ca5b030ee7ce9554632ca1d94be",
          block_timestamp: 1568966562,
          block_num: 247388,
          extrinsic_index: "247388-1",
          success: true
        },
        {
          from: "5H5q9bZ1cFWHz7FfRwWpLGK2gGtEmq9c1896givLXgjrtCoh",
          to: "5CXzeQBikyrHaBQN8iJwZEmG8Rs7xc1AYBUiofsw9UsYtEZW",
          module: "balances",
          amount: "1",
          hash:
            "0x6d2546458c7433c026e45ef2cc98fbb2abbe144c666b9ba76e3ea4e3c67bc17e",
          block_timestamp: 1568966340,
          block_num: 247351,
          extrinsic_index: "247351-1",
          success: true
        },
        {
          from: "5FF9PtFVUxuVAgDq3LF6ZWx8zfYc1GGvKAeAkd3N7V4FGPsz",
          to: "5CXzeQBikyrHaBQN8iJwZEmG8Rs7xc1AYBUiofsw9UsYtEZW",
          module: "balances",
          amount: "1",
          hash:
            "0xb0a91a2975ccdfc14b3a5c650c65f0812cac2057ba4f4c783b43e620c55613ab",
          block_timestamp: 1568964582,
          block_num: 247058,
          extrinsic_index: "247058-1",
          success: true
        },
        {
          from: "5H5q9bZ1cFWHz7FfRwWpLGK2gGtEmq9c1896givLXgjrtCoh",
          to: "5FF9PtFVUxuVAgDq3LF6ZWx8zfYc1GGvKAeAkd3N7V4FGPsz",
          module: "balances",
          amount: "30",
          hash:
            "0x4a6be9dd456426ffa6cb2308d95108c5415b14c112a53b20aa80134ec945e391",
          block_timestamp: 1568961025,
          block_num: 246465,
          extrinsic_index: "246465-1",
          success: true
        },
        {
          from: "5GpWrp3VJtdpejzon1fSwTiBJQuNsMKqayq7cwo4H9wiETL7",
          to: "5CUrbcpVqpzsypRP1YNT5EXtiUT3bn4DXmisLas2tuX6TGrv",
          module: "balances",
          amount: "3000",
          hash:
            "0x2d7ed5061258a99b625442805e5216caaa8251c475219d848f7824bc1bdcd368",
          block_timestamp: 1568881926,
          block_num: 233297,
          extrinsic_index: "233297-1",
          success: true
        },
        {
          from: "5GpWrp3VJtdpejzon1fSwTiBJQuNsMKqayq7cwo4H9wiETL7",
          to: "5G41cntZk9wHGBKrKrVU8bqPaeNok2odKycBt4sNCj66uvR8",
          module: "balances",
          amount: "100",
          hash:
            "0x32047c629e09e9bf3105567fd16ab813d9065baf0f2e957659d56bb19b52eb20",
          block_timestamp: 1568881914,
          block_num: 233295,
          extrinsic_index: "233295-1",
          success: true
        },
        {
          from: "5FZRFDSfnJ2aPEzUoha2HJqaLppiJYfdhKUhAnoGNPCLLXkb",
          to: "5CLVsa6nwadBdDSSe6bFyqrhttJ7HsijmvgeyrFjocV4GRmk",
          module: "balances",
          amount: "99990",
          hash:
            "0xaf6962f90f232397099b467535155c3b37ff740154d4ecc130d78b1cf0d7fa5e",
          block_timestamp: 1568880834,
          block_num: 233115,
          extrinsic_index: "233115-1",
          success: true
        },
        {
          from: "5FZRFDSfnJ2aPEzUoha2HJqaLppiJYfdhKUhAnoGNPCLLXkb",
          to: "5CLVsa6nwadBdDSSe6bFyqrhttJ7HsijmvgeyrFjocV4GRmk",
          module: "balances",
          amount: "1900000",
          hash:
            "0x5a737ac2e2fc826287d73bff0136962bc226936a85d2ed0bdc1e4c17d2344f4e",
          block_timestamp: 1568880810,
          block_num: 233111,
          extrinsic_index: "233111-2",
          success: true
        },
        {
          from: "5FZRFDSfnJ2aPEzUoha2HJqaLppiJYfdhKUhAnoGNPCLLXkb",
          to: "5CLVsa6nwadBdDSSe6bFyqrhttJ7HsijmvgeyrFjocV4GRmk",
          module: "balances",
          amount: "2000000",
          hash:
            "0x0fb521db88f5cfd57ab69d51351a3878a4f2bf3688f1d7f96596bffc7db52111",
          block_timestamp: 1568880780,
          block_num: 233106,
          extrinsic_index: "233106-1",
          success: false
        },
        {
          from: "5GpWrp3VJtdpejzon1fSwTiBJQuNsMKqayq7cwo4H9wiETL7",
          to: "5DFV1Ln4fTcfoiU8khmdi6anXFRQzsVJbG7h9cE1TipQewKA",
          module: "balances",
          amount: "20000",
          hash:
            "0x8da3ad50e294ca4b7992d822a8205fdfc9d3192a1b5e5b30a0576ee0be88b699",
          block_timestamp: 1568880018,
          block_num: 232979,
          extrinsic_index: "232979-1",
          success: true
        },
        {
          from: "5GpWrp3VJtdpejzon1fSwTiBJQuNsMKqayq7cwo4H9wiETL7",
          to: "5CcB95CQK4nFCy3tC1BcU9qK3qMrnD5fJ5X2tG4i6TQskQbF",
          module: "balances",
          amount: "100",
          hash:
            "0x37de654ec7afa4009c4ba32c6084207b1870e683bc51982dec55cb5c7c0f88c1",
          block_timestamp: 1568878986,
          block_num: 232807,
          extrinsic_index: "232807-1",
          success: true
        },
        {
          from: "5GWSE5bnNyj1T3yrF7Fviiuywi6rwLhGntHHDSJxUdSJReKx",
          to: "5GpWrp3VJtdpejzon1fSwTiBJQuNsMKqayq7cwo4H9wiETL7",
          module: "balances",
          amount: "30000",
          hash:
            "0x7e03706113520df45b82876b3aacaf56bd311baaad2791342513cc098f47545a",
          block_timestamp: 1568875956,
          block_num: 232302,
          extrinsic_index: "232302-2",
          success: true
        },
        {
          from: "5GWSE5bnNyj1T3yrF7Fviiuywi6rwLhGntHHDSJxUdSJReKx",
          to: "5DZR7TbSpjB18ue563wbkecqTARypfnKxcMywNpXDwGRHn5a",
          module: "balances",
          amount: "200000",
          hash:
            "0xfd42dc2f1614b00c8eba8507d2a4d2e372daeb1335c1b7137382ae0bbfbd36d7",
          block_timestamp: 1568794692,
          block_num: 218776,
          extrinsic_index: "218776-2",
          success: true
        },
        {
          from: "5H5q9bZ1cFWHz7FfRwWpLGK2gGtEmq9c1896givLXgjrtCoh",
          to: "5CXzeQBikyrHaBQN8iJwZEmG8Rs7xc1AYBUiofsw9UsYtEZW",
          module: "balances",
          amount: "1",
          hash:
            "0x5ed88d6717a525b0b1c56b2fbeaaac887a56ff6596968027998019763882b536",
          block_timestamp: 1568715408,
          block_num: 205590,
          extrinsic_index: "205590-1",
          success: true
        },
        {
          from: "5H5q9bZ1cFWHz7FfRwWpLGK2gGtEmq9c1896givLXgjrtCoh",
          to: "5CXzeQBikyrHaBQN8iJwZEmG8Rs7xc1AYBUiofsw9UsYtEZW",
          module: "balances",
          amount: "1",
          hash:
            "0xe3f92d7d7343956490fdaefe8516126df7442f4d7ecf5eebed04426f88d43097",
          block_timestamp: 1568715222,
          block_num: 205559,
          extrinsic_index: "205559-1",
          success: true
        },
        {
          from: "5H5q9bZ1cFWHz7FfRwWpLGK2gGtEmq9c1896givLXgjrtCoh",
          to: "5H5q9bZ1cFWHz7FfRwWpLGK2gGtEmq9c1896givLXgjrtCoh",
          module: "balances",
          amount: "0",
          hash:
            "0x2a1eb025fb64de0457c675dab8cf7e00fee9259207effea75e41c2c023287e2a",
          block_timestamp: 1568712048,
          block_num: 205035,
          extrinsic_index: "205035-1",
          success: true
        }
      ]
    };
  }
  async getTransferInfo({ key }) {
    // const reg = /^[0-9,/-]*$/;
    // const isNum = reg.test(key);
    // const condition = {};
    // if (isNum) {
    //   condition.block_num = key.split("-")[0];
    //   condition.extrinsic_idx = key.split("-")[1];
    // } else {
    //   condition.extrinsic_hash = key.substring(2);
    // }
    // const res = await this.app.model.Extrinsic.findOne({
    //   where: condition
    // });
    return {
      amount: "1",
      block_num: 289879,
      block_timestamp: 1569221736,
      extrinsic_index: "289879-1",
      from: "5FF9PtFVUxuVAgDq3LF6ZWx8zfYc1GGvKAeAkd3N7V4FGPsz",
      hash:
        "0x7ce4aef47c889d8a182109fa2368a1d4f45769149e80dbb905149431d3f2345d",
      module: "balances",
      success: true,
      to: "5CXzeQBikyrHaBQN8iJwZEmG8Rs7xc1AYBUiofsw9UsYtEZW"
    };
  }
}

module.exports = TransferService;
