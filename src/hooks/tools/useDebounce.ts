import { useRef } from 'react'

type TFn = (...args: any) => any

const useDebounce = (fn: TFn, delay: number) => {
  const timer = useRef<any>(undefined)
  return (...args: any) => {
    if (timer) clearTimeout(timer.current)
    timer.current = setTimeout(function () {
      fn(...args)
    }, delay)
  }
}

export default useDebounce
