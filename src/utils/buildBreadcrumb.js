export function buildBreadcrumb({ pathname, labels = {} }) {
  const segments = pathname.split('/').filter(Boolean)
  const items = [{ label: 'Trang chủ', to: '/' }]

  let acc = ''
  segments.forEach((segment, index) => {
    acc += `/${segment}`
    const isLast = index === segments.length - 1
    const label = labels[segment] ?? segment.replace(/-/g, ' ')
    items.push({
      label,
      to: isLast ? null : acc,
    })
  })

  return items
}
