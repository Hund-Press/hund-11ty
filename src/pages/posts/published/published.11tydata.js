module.exports = {
  collection: "posts",
  layout: "collection-post.webc",
  author: "kiran",
  permalink(data) {
    return `/${data.collection}/${data.slug}/`;
  },
};
