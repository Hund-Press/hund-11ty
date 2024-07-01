// let hashGen = require("hash-generator");

module.exports = {
  collection: "posts",
  layout: "collection-item/post.webc",
  permalink(data) {
    return `/${data.collection}/${data.slug}/`;
  },
};
