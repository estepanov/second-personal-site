import get from "lodash.get"
import { OverviewStats } from "../interfaces/Halo/Stats"


type StatValue = number | string

interface MultipleStats {
  [key: string]: StatValue | MultipleStats;
}

export type StatFormatter = (val: MultipleStats | StatValue) => StatValue

export interface StatOption {
  accessor: OverviewStatsKeys;
  title: string;
  format: StatFormatter
}

const commaDisplays = val => val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
const twoDigitPercentDisplays = val => `${val?.toFixed(2)}%`

export enum OverviewStatsKeys {
  MatchesPlayed = 'matches_played',
  CoreSummaryKills = 'core.summary.kills',
  CoreSummaryAssists = 'core.summary.assists',
  CoreSummaryDeaths = 'core.summary.deaths',
  CoreSummaryBetrayals = 'core.summary.betrayals',
  CoreSummaryMedals = 'core.summary.medals',
  CoreSummarySuicides = 'core.summary.suicides',
  CoreSummaryVehiclesDestroys = 'core.summary.vehicles.destroys',
  CoreSummaryVehiclesHijacks = 'core.summary.vehicles.hijacks',
  CoreShotsFired = 'core.shots.fired',
  CoreShotsMissed = 'core.shots.missed',
  CoreShotsLanded= 'core.shots.landed',
  CoreShotsAccuracy = 'core.shots.accuracy',
  CoreBreakdownsMatchesWins = 'core.breakdowns.matches.wins',
  CoreBreakdownsAssistsDriver = 'core.breakdowns.assists.driver',
  CoreBreakdownsAssistsCallouts = 'core.breakdowns.assists.callouts',
  WinRate = 'win_rate'
}

const formatterMap: {[key in OverviewStatsKeys]: StatOption} = {
  [OverviewStatsKeys.MatchesPlayed]: {
    accessor: OverviewStatsKeys.MatchesPlayed,
    title: 'Matches',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreSummaryKills]: {
    accessor: OverviewStatsKeys.CoreSummaryKills,
    title: 'Kills',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreSummaryDeaths]: {
    accessor: OverviewStatsKeys.CoreSummaryDeaths,
    title: 'Deaths',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreSummaryAssists]: {
    accessor: OverviewStatsKeys.CoreSummaryAssists,
    title: 'Assists',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreSummaryBetrayals]: {
    accessor: OverviewStatsKeys.CoreSummaryBetrayals,
    title: 'Assists',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreSummarySuicides]: {
    accessor: OverviewStatsKeys.CoreSummarySuicides,
    title: 'Suicides',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreShotsFired]: {
    accessor: OverviewStatsKeys.CoreShotsFired,
    title: 'Shots Fired',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreShotsMissed]: {
    accessor: OverviewStatsKeys.CoreShotsMissed,
    title: 'Shots Missed',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreShotsLanded]: {
    accessor: OverviewStatsKeys.CoreShotsLanded,
    title: 'Shots Landed',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreShotsAccuracy]: {
    accessor: OverviewStatsKeys.CoreShotsAccuracy,
    title: 'accuracy',
    format: twoDigitPercentDisplays
  },
  [OverviewStatsKeys.CoreSummaryVehiclesDestroys]: {
    accessor: OverviewStatsKeys.CoreSummaryVehiclesDestroys,
    title: 'Vehicles Destroyed',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreSummaryVehiclesHijacks]: {
    accessor: OverviewStatsKeys.CoreSummaryVehiclesHijacks,
    title: 'Vehicles Hijacked',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreSummaryMedals]: {
    accessor: OverviewStatsKeys.CoreSummaryMedals,
    title: 'Medals',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreBreakdownsMatchesWins]: {
    accessor: OverviewStatsKeys.CoreBreakdownsMatchesWins,
    title: 'Wins',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreBreakdownsAssistsDriver]: {
    accessor:  OverviewStatsKeys.CoreBreakdownsAssistsDriver,
    title: 'Driver Assists',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreBreakdownsAssistsCallouts]: {
    accessor:  OverviewStatsKeys.CoreBreakdownsAssistsCallouts,
    title: 'Callout Assists',
    format: commaDisplays
  },
  [OverviewStatsKeys.WinRate]: {
    accessor: OverviewStatsKeys.WinRate,
    title: 'Win Rate',
    format: twoDigitPercentDisplays
  },
}

export const getStatOptions = (options: OverviewStatsKeys[]) => {
  return options.map(key => formatterMap[key])
}

export const getStatOption = (option: OverviewStatsKeys) => {
  return formatterMap[option]
}

export const getStat = (stats:OverviewStats, accessor: OverviewStatsKeys ) => get(stats, accessor)

export const formatStat = (key: OverviewStatsKeys, value: number | string) => {
  const option = getStatOption(key)
  return option.format(value)
}

export const getFormattedStat = (stat: OverviewStats, accessor: OverviewStatsKeys) => {
  const value = getStat(stat, accessor)
  return formatStat(accessor, value)
}
