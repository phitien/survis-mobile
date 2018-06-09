export function date(d) {
  let rs = new Date(d)
  if (rs) rs = new Date(d.replace(' ', 'T'))
  return rs
}
