import {CURRENT_USER} from './types'

export const currentUser = () -> {
  return {
    type: CURRENT_USER
  }
}
