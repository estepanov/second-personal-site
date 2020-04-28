import { useCallback, useEffect } from 'react'

interface useKeyConfig {
  preventDefault?: boolean
}

const useKey = (keyCodes: number[], handler: Function, config?: useKeyConfig) => {
  const memoizedHandler = useCallback(handler)

  const eventHandler = e => {
    if (config && config.preventDefault) e.preventDefault()

    if (keyCodes.includes(e.keyCode)) {
      memoizedHandler(e)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', eventHandler)
    return () => document.removeEventListener('keydown', eventHandler)
  }, [memoizedHandler])
}

export default useKey
