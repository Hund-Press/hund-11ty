const util = require("util");

module.exports = function (config) {
  config.addWatchTarget("src/styles/**/*.css");

  config.addAsyncFilter("inspectValue", async function (value) {
    return util.inspect(value);
  });
};
