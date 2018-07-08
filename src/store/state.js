import {loadSearch} from 'common/js/cache'

const state = {
  user: loadSearch('user'),
  token: loadSearch('token'),
  tokenTime: loadSearch('tokenTime')
}
export default state
