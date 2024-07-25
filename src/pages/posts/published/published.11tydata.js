module.exports = {
  collection: "posts",
  layout: "body.webc",
  permalink(data) {
    return `/${data.collection}/${data.slug}/`;
  },
};
