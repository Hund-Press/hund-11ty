module.exports = {
  collection: "posts",
  layout: "page-post-full.webc",
  author: "kiran",
  permalink(data) {
    return `/${data.collection}/${data.slug}/`;
  },
};
