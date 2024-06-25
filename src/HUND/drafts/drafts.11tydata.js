module.exports = {
  collection: "drafts",
  layout: "collection-item/post.webc",
  permalink(data) {
    return `/${data.collection}/${data.slug}/`;
  },
};
