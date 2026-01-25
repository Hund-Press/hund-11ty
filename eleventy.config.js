import * as plugins from './.eleventy.config/all.js'

export default function (_11ty) {
  _11ty.addPlugin(plugins.WebC)
  _11ty.addPlugin(plugins.DateTime)
  _11ty.addPlugin(plugins.Markdown)
  _11ty.addPlugin(plugins.Collections)
  _11ty.addPlugin(plugins.Feeds)
  _11ty.addPlugin(plugins.Styles)

  return {
    dir: {
      input: 'src',
      output: 'dist',

      data: 'data',
      layouts: 'contexts',
      includes: '',
    },
  }
}
