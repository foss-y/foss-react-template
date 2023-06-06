import { useRef } from 'react'

type TFn = (...args: any) => any

const useThrottle = (fn: TFn, delay: number) => {
  const lastCall = useRef(0)
  const timeout = useRef<any>(null)
  return (...args: any) => {
    const now = new Date().getTime()
    if (now - lastCall.current < delay) {
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => {
        lastCall.current = now
        fn(...args)
      }, delay)
    } else {
      lastCall.current = now
      fn(...args)
    }
  }
}

export default useThrottle
