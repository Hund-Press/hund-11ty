export default async function (_11ty) {
  _11ty.addFilter('formatPostDate', (dateObj) => {
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  })

  _11ty.addFilter('formatCompactDate', (dateObj) => {
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })
  })

  _11ty.addFilter('formatDateForUrl', (dateObj) => {
    return dateObj.toISOString().split('T')[0]
  })
}
