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

const doNothing = val => val;
const fixedThreePlaces = val => val?.toFixed(3);
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
  CoreDamageTaken ='core.damage.taken',
  CoreDamageDealt ='core.damage.dealt',
  CoreDamageAverage ='core.damage.average',
  CoreShotsFired = 'core.shots.fired',
  CoreShotsMissed = 'core.shots.missed',
  CoreShotsLanded= 'core.shots.landed',
  CoreShotsAccuracy = 'core.shots.accuracy',
  CoreBreakdownsKillsMelee = 'core.breakdowns.kills.melee',
  CoreBreakdownsKillsGrenades = 'core.breakdowns.kills.grenades',
  CoreBreakdownsKillsHeadshots = 'core.breakdowns.kills.headshots',
  CoreBreakdownsKillsPowerWeapons = 'core.breakdowns.kills.power_weapons',
  CoreBreakdownsMatchesWins = 'core.breakdowns.matches.wins',
  CoreBreakdownsMatchesLosses = 'core.breakdowns.matches.losses',
  CoreBreakdownsMatchesLeft = 'core.breakdowns.matches.left',
  CoreBreakdownsMatchesDraws = 'core.breakdowns.matches.draws',
  CoreBreakdownsAssistsDriver = 'core.breakdowns.assists.driver',
  CoreBreakdownsAssistsCallouts = 'core.breakdowns.assists.callouts',
  CoreBreakdownsAssistsEmp = 'core.breakdowns.assists.emp',
  CoreKDA = 'core.kda',
  CoreKDR = 'core.kdr',
  CoreTotalScore = 'core.total_score',
  WinRate = 'win_rate',
  TimePlayedSeconds = 'time_played.seconds',
  TimePlayedHuman = 'time_played.human',
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
  [OverviewStatsKeys.CoreDamageTaken]: {
    accessor: OverviewStatsKeys.CoreDamageTaken,
    title: 'Damage Taken',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreDamageDealt]: {
    accessor: OverviewStatsKeys.CoreDamageDealt,
    title: 'Damage Dealt',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreDamageAverage]: {
    accessor: OverviewStatsKeys.CoreDamageAverage,
    title: 'Damage Average',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreBreakdownsKillsMelee]: {
    accessor: OverviewStatsKeys.CoreBreakdownsKillsMelee,
    title: 'Melee Kills',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreBreakdownsKillsGrenades]: {
    accessor: OverviewStatsKeys.CoreBreakdownsKillsGrenades,
    title: 'Grenade Kills',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreBreakdownsKillsHeadshots]: {
    accessor: OverviewStatsKeys.CoreBreakdownsKillsHeadshots,
    title: 'Headshot Kills',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreBreakdownsKillsPowerWeapons]: {
    accessor: OverviewStatsKeys.CoreBreakdownsKillsPowerWeapons,
    title: 'Power Weapon Kills',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreBreakdownsMatchesLosses]: {
    accessor: OverviewStatsKeys.CoreBreakdownsMatchesLosses,
    title: 'Matches Lost',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreBreakdownsMatchesLeft]: {
    accessor: OverviewStatsKeys.CoreBreakdownsMatchesLeft,
    title: 'Matches Left',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreBreakdownsMatchesDraws]: {
    accessor: OverviewStatsKeys.CoreBreakdownsMatchesDraws,
    title: 'Matches Draw',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreBreakdownsAssistsEmp]: {
    accessor: OverviewStatsKeys.CoreBreakdownsAssistsEmp,
    title: 'Assists Emp',
    format: commaDisplays
  },
  [OverviewStatsKeys.CoreKDA]: {
    accessor: OverviewStatsKeys.CoreKDA,
    title: 'KDA',
    format: fixedThreePlaces
  },
  [OverviewStatsKeys.CoreKDR]: {
    accessor: OverviewStatsKeys.CoreKDR,
    title: 'KDR',
    format: fixedThreePlaces
  },
  [OverviewStatsKeys.CoreTotalScore]: {
    accessor: OverviewStatsKeys.CoreTotalScore,
    title: 'Total Score',
    format: commaDisplays
  },
  [OverviewStatsKeys.TimePlayedSeconds]: {
    accessor: OverviewStatsKeys.TimePlayedSeconds,
    title: 'Time Played (seconds)',
    format: commaDisplays
  },
  [OverviewStatsKeys.TimePlayedHuman]: {
    accessor: OverviewStatsKeys.TimePlayedHuman,
    title: 'Time Played (human)',
    format: doNothing
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
