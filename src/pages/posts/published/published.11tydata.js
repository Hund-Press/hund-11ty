module.exports = {
  collection: "posts",
  layout: "collection-post.webc",
  author: "danaba",
  permalink(data) {
    return `/${data.collection}/${data.slug}/`;
  },
};
