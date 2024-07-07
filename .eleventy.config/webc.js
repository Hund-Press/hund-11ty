const WebcPlugin = require("@11ty/eleventy-plugin-webc");

/* TODO: get hund reference out? */

module.exports = function (config) {
  config.addPlugin(WebcPlugin, {
    components: [
      "src/components/**/*.webc",
      "npm:@11ty/eleventy-img/*.webc",
      "src/HUND/components/**/*.webc",
    ],
  });
};
