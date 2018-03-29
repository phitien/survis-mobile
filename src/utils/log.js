import {APPNAME} from '../constants'
export function log(...args) {
  console.log(`${APPNAME}-Log`, ...args)
}
