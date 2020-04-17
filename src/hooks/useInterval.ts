import { useEffect, useRef } from 'react'

const useInterval = (callback, delay) => {
  const savedCallback = useRef<Function>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => {
        if (savedCallback.current) savedCallback.current()
      }, delay)
      return () => clearInterval(id)
    }
    return undefined
  }, [delay])
}

export default useInterval
