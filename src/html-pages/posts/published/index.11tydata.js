let section = "posts";

module.exports = {
  layout: "main-post.webc",
  tags: section,
  permalink(data) {
    return `/${section}/${data.slug}/`;
  },
};
