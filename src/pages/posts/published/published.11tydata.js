let section = "/posts/";

module.exports = {
  layout: "main-post.webc",
  tags: "posts",
  permalink(data) {
    return `${section}${data.slug}/`;
  },
};
