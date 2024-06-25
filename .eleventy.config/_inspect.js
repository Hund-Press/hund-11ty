const util = require("util");
module.exports = function (config) {
  config.addAsyncFilter("debug", async function (value) {
    return util.inspect(value);
  });
};
