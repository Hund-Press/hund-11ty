module.exports = {
  collection: "posts",
  layout: "page-post-full.webc",
  permalink(data) {
    return `/${data.collection}/${data.slug}/`;
  },
};
