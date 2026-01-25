export default async function (_11ty) {
  _11ty.addCollection('posts', function (collectionApi) {
    return collectionApi.getFilteredByGlob('./src/content/posts/**/*.md')
  })
}
