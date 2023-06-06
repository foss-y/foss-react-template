import useToken from './useToken'

const { getValue } = useToken()

const useIsLogin = (): boolean => {
  const token = getValue('access_token')

  return !!token
}

export default useIsLogin
