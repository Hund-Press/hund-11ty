module.exports = {
  collection: "bio",
  layout: "collection-post.webc",
  permalink(data) {
    return `/${data.collection}/${data.slug}/`;
  },
};
