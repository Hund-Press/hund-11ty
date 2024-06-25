module.exports = function (config) {
  config.addPassthroughCopy({ "src/styles": "css" });
  config.addPassthroughCopy({ "src/files/fonts/**/*.ttf": "fonts" });
  config.addPassthroughCopy({ "src/files/root/**/*": "/" });
};
