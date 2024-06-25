let hashGen = require("hash-generator");
// TODO: set hash for posts in editor
module.exports = function (config) {
  config.addFilter("fileSlug", (slug) => {
    return slug || hashGen(hashLength);
  });
};
