import AsyncStorage from '@react-native-async-storage/async-storage'

const DOMAIN_TAIL = `.pmbk.vn`

export async function getBaseURL(input?: string) {
  const domain = input || (await AsyncStorage.getItem('domain'))
  const outPut = domain?.includes('http')
    ? domain
    : domain?.includes('.')
    ? `https://${domain}`
    : `https://${domain}${DOMAIN_TAIL}`
  return outPut
}
