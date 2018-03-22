export function query(params) {
  if (typeof params != 'object') return params
  return Object
    .keys(params || {})
    .filter(k => k)
    .reduce((rs, k) => {
      if (typeof params[k] != 'object') rs.push(`${k}=${params[k]}`)
      return rs
    }, [])
    .join('&')
}
export function url(url, query) {
  if (!query) return url
  url = (url || '')
    .replace(/^\W+/g, '')
    .replace(/\W+$/g, '');
  query = (query || '')
    .replace(/^\W+/g, '')
    .replace(/\W+$/g, '');
  return url.includes('?')
    ? `${url}&${query}`
    : `${url}?${query}`
}
