import { fetchWrapper } from '../../api/fetch'

export const fetchInsights = () =>
  fetchWrapper.get('https://api.jsonbin.io/v3/b/6107fbe9f14b8b153e05e714?meta=false')

export const fetchElectoralRollDetails = <T>() =>
  fetchWrapper.get<T>('https://api.jsonbin.io/v3/b/6128c389c5159b35ae04d4ed/1?meta=false')
