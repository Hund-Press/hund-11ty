module.exports = (config) => {
  config.addPlugin(require("./.eleventy.config/webc"));
  config.addPlugin(require("./.eleventy.config/collections"));
  config.addPlugin(require("./.eleventy.config/images"));
  config.addPlugin(require("./.eleventy.config/markdown"));
  config.addPlugin(require("./.eleventy.config/dates"));
  config.addPlugin(require("./.eleventy.config/passthrough"));
  config.addPlugin(require("./.eleventy.config/rss"));
  config.addPlugin(require("./.eleventy.config/hund"));
  config.addPlugin(require("./.eleventy.config/_inspect"));

  config.addWatchTarget("src/styles/**/*.css");
  return {
    dir: {
      output: "dist",
      input: "src",
      data: "data",
      layouts: "layouts",
      includes: "",
    },
  };
};
