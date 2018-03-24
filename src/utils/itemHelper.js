import {getDistance} from './getDistance'

export const itemHelper = (item) => {
  return {
    id: parseFloat(item.id) || -1,
    name: item.name || '',
    highlight: item.highlight || '',
    description: item.description || '',
    price: parseFloat(item.price)
      ? `$${parseFloat(item.price)}`
      : '',
    image: item.image || '',
    totalrate: parseFloat(item.totalrate) || 0,
    totalreviews: parseInt(item.totalreviews) || 0,
    latitude: parseFloat(item.latitude) || 0,
    longitude: parseFloat(item.longitude) || 0,
    toptext_color: item.toptext_color || 'white',
    toptext_fontsize: parseInt(item.toptext_fontsize) || 12,
    toptext: item.toptext || '',
    toptext_bgcolor: item.toptext_bgcolor || 'red',
    bigtitle: item.bigtitle || '',
    smalltitle: item.smalltitle || '',
    address: item.address || '',
    items: []
      .concat(item.items)
      .filter(o => o),
    images: []
      .concat(item.images)
      .filter(o => o),
    orderdate: item.orderdate || '',
    isfeatured: parseInt(item.isfeatured) && parseInt(item.isfeatured) > 0,
    promotion_image: item.promotion_image || '',
    distance: `${(parseFloat(item.distance) || 0).toFixed(2)}km`,
    // distance: getDistance(latitude, longitude, props.Location.latitude, props.Location.longitude)
    cardnum: item.num || '',
    shop_info: item.shop_info || {},
  }
}
export const last4 = (s) => {
  return (s || '').substr(-4)
}
export const cardnum = (s, hide = true) => {
  s = (s || '').replace(/\D/g, '')
  if (!s) return ''
  return Array.from({length: s.length}, (o,i) => {
    if (i >= 16) return ''
    let r = i >= 12 ? s[i] : '*'
    if (i < 15 && i%4 == 3) return hide ? r : `${s[i]} `
    return hide ? r : s[i]
  }).join('')
}
export const cardexpire = (s, hide = true) => {
  s = (s || '').replace(/\D/g, '')
  if (!s) return ''
  return Array.from({length: s.length}, (o,i) => {
    if (i >= 4) return ''
    if (i < 3 && i%2 == 1) return `${s[i]}/`
    return s[i]
  }).join('')
}
export const substr = (s, max) => {
  s = `${s || ''}`
  return s.length > max
    ? `${s.substr(0, max - 2)}..`
    : s
}
