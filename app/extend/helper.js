module.exports = {
  /**
   * @param {Array} list 要迭代的数组
   * @param {Number} limit 并发数量控制数
   * @param {Function} asyncHandle 对`list`的每一个项的处理函数，参数为当前处理项，必须 return 一个Promise来确定是否继续进行迭代
   * @return {Promise} 返回一个 Promise 值来确认所有数据是否迭代完成
   */
  mapLimit(list, limit, asyncHandle) {
    let recursion = arr => {
      return asyncHandle(arr.shift()).then(() => {
        if (arr.length !== 0) return recursion(arr);
        // 数组还未迭代完，递归继续进行迭代
        else return "finish";
      });
    };

    let listCopy = [].concat(list);
    let asyncList = []; // 正在进行的所有并发异步操作
    while (limit--) {
      asyncList.push(recursion(listCopy));
    }
    return Promise.all(asyncList); // 所有并发异步操作都完成后，本次并发控制迭代完成
  },
  responseFormatter({ code, data, msgObj }) {
    const reg = /{(\w+)}/g;
    if (code === "1000") {
      this.ctx.body = {
        code: "1000",
        msg: "success",
        data
      };
    } else {
      let errDesc = this.config.errorDescs[code];
      if (errDesc) {
        if (errDesc.match(reg)) {
          errDesc = errDesc.replace(reg, (match, key) => {
            return msgObj[key] === undefined ? match : msgObj[key];
          });
        }
        this.ctx.body = {
          code,
          msg: errDesc
        };
      } else {
        this.ctx.body = {
          code: "9999",
          msg: "未知错误"
        };
      }
    }
  }
};
