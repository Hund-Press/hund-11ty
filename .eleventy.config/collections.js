let sections = ["posts"];
let collectionsPath = "./src/content/";
let publishDirName = "published";

module.exports = function (config) {
  sections.forEach((section) => {
    config.addCollection(section, function (collectionApi) {
      return collectionApi
        .getFilteredByGlob(
          collectionsPath + section + "/" + publishDirName + "/*.*",
        )
        .reverse();
    });

    config.addCollection(section + "_timeline", function (collectionApi) {
      const posts = collectionApi.getFilteredByGlob(
        collectionsPath + section + "/" + publishDirName + "/*.*",
      );
      return posts;
    });
  });

  config.addCollection("drafts", function (collectionApi) {
    const drafts = collectionApi.getFilteredByGlob("./src/HUND/drafts/*.*");
    return drafts;
  });
};
