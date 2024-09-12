require("dotenv").config();

module.exports = (config) => {
  config.addPlugin(require("./.eleventy.config/webc"));
  config.addPlugin(require("./.eleventy.config/markdown"));
  config.addPlugin(require("./.eleventy.config/dates"));

  config.addPlugin(require("./.eleventy.config/collections"));
  config.addPlugin(require("./.eleventy.config/feeds"));

  // config.addPlugin(require("./.eleventy.config/css"));
  config.addPlugin(require("./.eleventy.config/images"));
  config.addPlugin(require("./.eleventy.config/passthrough"));

  config.addPlugin(require("./.eleventy.config/local-dev"));

  return {
    dir: {
      output: "dist",
      input: "src",
      data: "data",
      layouts: "html-layouts",
      includes: "",
    },
  };
};
