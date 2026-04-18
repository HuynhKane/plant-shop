export function formatPrice(amount, locale = 'vi-VN', currencySuffix = 'đ') {
  const formatted = Number(amount).toLocaleString(locale)
  return `${formatted} ${currencySuffix}`.trim()
}
