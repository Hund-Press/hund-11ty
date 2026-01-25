import MarkdownIt from 'markdown-it'

export default async function (_11ty) {
    _11ty.setLibrary(
        'md',
        MarkdownIt({
            html: true,
            linkify: true,
            typographer: true,
        })
    )
}
