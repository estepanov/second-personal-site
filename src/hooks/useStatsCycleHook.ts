import { useEffect, useMemo, useState } from 'react';
import { OverviewStats } from '../interfaces/Halo/Stats';
import { getFormattedStat, getStatOptions, OverviewStatsKeys } from '../utils/haloStatFormatter';


export const useStatsCycleHook = (keys: OverviewStatsKeys[], stats: OverviewStats|null, interval: number) => {
  const options = useMemo(() => getStatOptions(keys), [keys])
  const [currIndx, SetCurrIndx] = useState(0);

  useEffect(() => {
    if(!options || !options.length || !stats) return;
    const delta = interval
    const timer = setInterval(() => {
      SetCurrIndx(val => {
        if(val+1 >= options.length) return 0
        return val+1
      })
    }, delta)
    return () => {
      clearInterval(timer)
    }
  }, [options, stats])
  const isEmpty = (!options || !options.length || !stats)
  const currOption = isEmpty ? null: options[currIndx]
  const currStat = !stats || !currOption ? null : getFormattedStat(stats, currOption.accessor)
  return [currOption, currStat]
}
