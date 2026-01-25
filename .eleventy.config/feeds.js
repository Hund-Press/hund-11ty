import RssPlugin from '@11ty/eleventy-plugin-rss'

export default async function (_11ty) {
    _11ty.addPlugin(RssPlugin)
    
    // Make RSS filters available to WebC
    const getNewestCollectionItemDate = (collection) => {
        if (!collection || collection.length === 0) {
            return null
        }
        return collection
            .map(item => item.data.date || item.date)
            .filter(date => date)
            .sort((a, b) => new Date(b) - new Date(a))[0]
    }
    
    _11ty.addFilter('getNewestCollectionItemDate', getNewestCollectionItemDate)
}
