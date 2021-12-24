import get from 'lodash.get';
import { useEffect, useState } from 'react';
import { OverviewStats } from '../interfaces/Halo/Stats';

type StatValue = any

interface MultipleStats {
  [key: string]: StatValue | MultipleStats;
}

type StatFormatter = (value: MultipleStats | StatValue) => StatValue

export interface StatOption {
  accessor: string | string[];
  title: string;
  format: StatFormatter
}

export const useStatsHook = (options: StatOption[], stats: OverviewStats|null, interval: number) => {
  const [currIndx, SetCurrIndx] = useState(0);
  useEffect(() => {
    if(!options || !options.length || !stats) return;
    const timer = setInterval(() => {
      SetCurrIndx(val => {
        if(val+1 >= options.length) return 0
        return val+1
      })
    }, interval)
    return () => {
      clearInterval(timer)
    }
  }, [options, stats])
  const isEmpty = (!options || !options.length || !stats)
  const currOption = isEmpty ? null: options[currIndx]
  const currStat = !currOption ? null : get(stats, currOption.accessor)
  const formattedStat = currOption && currOption.format ? currOption.format(currStat) : currStat
  return [currOption, formattedStat]
}
