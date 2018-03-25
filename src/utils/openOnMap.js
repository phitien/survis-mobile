import {Alert, Linking, Platform} from 'react-native'
import {openExternal} from './openExternal'

export function openOnMap(lat, lng) {
  const scheme = Platform.OS === 'ios' ? 'maps:0,0?q=' : 'geo:0,0?q=:'
  const latLng = `${lat},${lng}`
  const label = 'SurVis'
  const url = Platform.OS === 'ios' ? `${scheme}${label}@${latLng}` : `${scheme}${latLng}(${label})`
  openExternal(url)
}
