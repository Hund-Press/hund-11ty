let sectionName = "posts";

module.exports = {
  layout: "main-post.webc",
  tags: sectionName,
  permalink(data) {
    return `/${sectionName}/${data.slug}/`;
  },
};
