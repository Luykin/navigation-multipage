import * as types from './mutation-types'
import CryptoJS from 'crypto-js'
import { encryptedStorage } from 'common/js/util'
const mutations = {
  [types.SET_TOKEN](state, token) {
    state.token = token
    encryptedStorage('token', token)
  },
  [types.SET_USER](state, user) {
    state.user = user
    encryptedStorage('user', user)
  },
  [types.SET_TOKENTIME](state, tokenTime) {
    state.tokenTime = tokenTime
    encryptedStorage('tokenTime', tokenTime)
  }
}

export default mutations
