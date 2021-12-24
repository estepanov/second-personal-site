import { useEffect, useState } from 'react';

export const useCountDown = (target: number, interval: number) => {
  const [timeLeft, setTimeLeft] = useState(target);
  useEffect(() => {
    const timer = target && setInterval(() => {
      setTimeLeft(val => {
        if (val-interval <= 0) return target
        return val-interval
      })
    }, interval)
    return () => {
      if(timer) clearInterval(timer)
    }
  }, [])

  return [timeLeft]
}
