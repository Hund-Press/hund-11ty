let sections = ["posts"];
let collectionsPath = "./src/pages/";
let collectionPublishedDirName = "published";

module.exports = function (config) {
  sections.forEach((section) => {
    config.addCollection(section, function (collectionApi) {
      return collectionApi
        .getFilteredByGlob(
          collectionsPath + section + "/" + collectionPublishedDirName + "/*.*",
        )
        .reverse();
    });

    config.addCollection(section + "_sequence", function (collectionApi) {
      const posts = collectionApi.getFilteredByGlob(
        collectionsPath + section + "/" + collectionPublishedDirName + "/*.*",
      );
      return posts;
    });
  });

  config.addCollection("drafts", function (collectionApi) {
    const drafts = collectionApi.getFilteredByGlob("./src/HUND/drafts/*.*");
    return drafts;
  });
};
