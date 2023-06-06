import { Cookies } from 'react-cookie'

const cookie = new Cookies()

const useToken = () => {
  const getValue = (key: string) => {
    return cookie.get(key)
  }

  const getAllValue = () => {
    return cookie.getAll()
  }

  const removeValue = (keys: string | string[]) => {
    if (Array.isArray(keys)) {
      keys.forEach((key) => {
        cookie.remove(key, {
          path: '/'
        })
      })
    } else {
      cookie.remove(keys)
    }
  }

  const setValue = (key: string, value: string) => {
    cookie.set(key, value)
  }

  return {
    getValue,
    getAllValue,
    removeValue,
    setValue
  }
}

export default useToken
