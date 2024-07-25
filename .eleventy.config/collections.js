let sections = ["posts"];
let collectionsRoot = "./src/pages/";
let collectionPublishedDirName = "published";

module.exports = function (config) {
  config.addCollection("drafts", function (collectionApi) {
    const drafts = collectionApi.getFilteredByGlob(
      "./src/HUND/pages/write/drafts/*.*",
    );
    return drafts;
  });
};
