module.exports = {
  collection: "drafts",
  layout: "../HUND/layouts/default.webc",
  permalink(data) {
    return `/${data.collection}/${data.slug}/`;
  },
};
