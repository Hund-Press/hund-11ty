module.exports = function (config) {
  if (
    process.env.ELEVENTY_RUN_MODE === "serve" ||
    process.env.ELEVENTY_RUN_MODE === "watch"
  ) {
    config.addWatchTarget("src/styles/**/*.css");

    config.addPassthroughCopy({ "src/🐕/files/subfont/**/*.woff2": "fonts" });

    config.addAsyncFilter("inspectValue", async function (value) {
      return util.inspect(value);
    });
  }
};
