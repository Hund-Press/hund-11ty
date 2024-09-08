const postcss = require("postcss");
const postcssImport = require("postcss-import");

module.exports = function (config) {
  console.log("+++++++++++++++++++++++++++++++++++++++");
  config.addBundle("css", {
    transforms: [
      async function (content) {
        console.log("===============================");
        return content;
        // console.log(this.page.inputPath);

        // this.type returns the bundle name.
        // Same as Eleventy transforms, this.page is available here.

        // let result = await postcss().process(content, {
        //   from: this.page.inputPath,
        //   to: null,
        // });
        // return result.css;
      },
    ],
  });
};
