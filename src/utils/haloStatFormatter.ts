import get from "lodash.get";
import { OverviewStats } from "../interfaces/Halo/Stats";

type StatValue = number | string;

interface MultipleStats {
  [key: string]: StatValue | MultipleStats;
}

export type StatFormatter = (val: MultipleStats | StatValue) => StatValue;

export interface StatOption {
  accessor: OverviewStatsKeys;
  title: string;
  format: StatFormatter;
  biggerBetter: boolean;
}

const doNothing = (val) => val;
const fixedThreePlaces = (val) => val?.toFixed(3);
const commaDisplays = (val) => val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const twoDigitPercentDisplays = (val) => `${val?.toFixed(2)}%`;

export enum OverviewStatsKeys {
  MatchesPlayed = "matches.total",
  MatchesPlayedOG = "matches_played",
  CoreSummaryKills = "core.summary.kills",
  CoreSummaryAssists = "core.summary.assists",
  CoreSummaryDeaths = "core.summary.deaths",
  CoreSummaryBetrayals = "core.summary.betrayals",
  CoreSummaryMedals = "core.summary.medals",
  CoreSummarySuicides = "core.summary.suicides",
  CoreSummaryVehiclesDestroys = "core.summary.vehicles.destroys",
  CoreSummaryVehiclesHijacks = "core.summary.vehicles.hijacks",
  CoreDamageTaken = "core.damage.taken",
  CoreDamageDealt = "core.damage.dealt",
  CoreDamageAverage = "core.damage.average",
  CoreShotsFired = "core.shots.fired",
  CoreShotsMissed = "core.shots.missed",
  CoreShotsLanded = "core.shots.landed",
  CoreShotsAccuracy = "core.shots.accuracy",
  CoreBreakdownsKillsMelee = "core.breakdowns.kills.melee",
  CoreBreakdownsKillsGrenades = "core.breakdowns.kills.grenades",
  CoreBreakdownsKillsHeadshots = "core.breakdowns.kills.headshots",
  CoreBreakdownsKillsPowerWeapons = "core.breakdowns.kills.power_weapons",
  CoreBreakdownsMatchesWins = "matches.outcomes.wins",
  CoreBreakdownsMatchesLosses = "matches.outcomes.losses",
  CoreBreakdownsMatchesLeft = "matches.outcomes.left",
  CoreBreakdownsMatchesDraws = "matches.outcomes.draws",
  CoreBreakdownsAssistsDriver = "core.breakdowns.assists.driver",
  CoreBreakdownsAssistsCallouts = "core.breakdowns.assists.callouts",
  CoreBreakdownsAssistsEmp = "core.breakdowns.assists.emp",
  CoreKDA = "core.kda",
  CoreKDR = "core.kdr",
  CoreTotalScore = "core.scores.personal",
  WinRate = "matches.win_rate",
  TimePlayedSeconds = "time_played.seconds",
  TimePlayedHuman = "time_played.human",
}

const formatterMap: { [key in OverviewStatsKeys]: StatOption } = {
  [OverviewStatsKeys.MatchesPlayed]: {
    accessor: OverviewStatsKeys.MatchesPlayed,
    title: "Matches",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.MatchesPlayedOG]: {
    accessor: OverviewStatsKeys.MatchesPlayedOG,
    title: "Matches",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreSummaryKills]: {
    accessor: OverviewStatsKeys.CoreSummaryKills,
    title: "Kills",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreSummaryDeaths]: {
    accessor: OverviewStatsKeys.CoreSummaryDeaths,
    title: "Deaths",
    format: commaDisplays,
    biggerBetter: false,
  },
  [OverviewStatsKeys.CoreSummaryAssists]: {
    accessor: OverviewStatsKeys.CoreSummaryAssists,
    title: "Assists",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreSummaryBetrayals]: {
    accessor: OverviewStatsKeys.CoreSummaryBetrayals,
    title: "Betrayals",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreSummarySuicides]: {
    accessor: OverviewStatsKeys.CoreSummarySuicides,
    title: "Suicides",
    format: commaDisplays,
    biggerBetter: false,
  },
  [OverviewStatsKeys.CoreShotsFired]: {
    accessor: OverviewStatsKeys.CoreShotsFired,
    title: "Shots Fired",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreShotsMissed]: {
    accessor: OverviewStatsKeys.CoreShotsMissed,
    title: "Shots Missed",
    format: commaDisplays,
    biggerBetter: false,
  },
  [OverviewStatsKeys.CoreShotsLanded]: {
    accessor: OverviewStatsKeys.CoreShotsLanded,
    title: "Shots Landed",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreShotsAccuracy]: {
    accessor: OverviewStatsKeys.CoreShotsAccuracy,
    title: "accuracy",
    format: twoDigitPercentDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreSummaryVehiclesDestroys]: {
    accessor: OverviewStatsKeys.CoreSummaryVehiclesDestroys,
    title: "Vehicles Destroyed",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreSummaryVehiclesHijacks]: {
    accessor: OverviewStatsKeys.CoreSummaryVehiclesHijacks,
    title: "Vehicles Hijacked",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreSummaryMedals]: {
    accessor: OverviewStatsKeys.CoreSummaryMedals,
    title: "Medals",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreBreakdownsMatchesWins]: {
    accessor: OverviewStatsKeys.CoreBreakdownsMatchesWins,
    title: "Wins",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreBreakdownsAssistsDriver]: {
    accessor: OverviewStatsKeys.CoreBreakdownsAssistsDriver,
    title: "Driver Assists",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreBreakdownsAssistsCallouts]: {
    accessor: OverviewStatsKeys.CoreBreakdownsAssistsCallouts,
    title: "Callout Assists",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.WinRate]: {
    accessor: OverviewStatsKeys.WinRate,
    title: "Win Rate",
    format: twoDigitPercentDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreDamageTaken]: {
    accessor: OverviewStatsKeys.CoreDamageTaken,
    title: "Damage Taken",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreDamageDealt]: {
    accessor: OverviewStatsKeys.CoreDamageDealt,
    title: "Damage Dealt",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreDamageAverage]: {
    accessor: OverviewStatsKeys.CoreDamageAverage,
    title: "Damage Average",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreBreakdownsKillsMelee]: {
    accessor: OverviewStatsKeys.CoreBreakdownsKillsMelee,
    title: "Melee Kills",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreBreakdownsKillsGrenades]: {
    accessor: OverviewStatsKeys.CoreBreakdownsKillsGrenades,
    title: "Grenade Kills",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreBreakdownsKillsHeadshots]: {
    accessor: OverviewStatsKeys.CoreBreakdownsKillsHeadshots,
    title: "Headshot Kills",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreBreakdownsKillsPowerWeapons]: {
    accessor: OverviewStatsKeys.CoreBreakdownsKillsPowerWeapons,
    title: "Power Weapon Kills",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreBreakdownsMatchesLosses]: {
    accessor: OverviewStatsKeys.CoreBreakdownsMatchesLosses,
    title: "Matches Lost",
    format: commaDisplays,
    biggerBetter: false,
  },
  [OverviewStatsKeys.CoreBreakdownsMatchesLeft]: {
    accessor: OverviewStatsKeys.CoreBreakdownsMatchesLeft,
    title: "Matches Left",
    format: commaDisplays,
    biggerBetter: false,
  },
  [OverviewStatsKeys.CoreBreakdownsMatchesDraws]: {
    accessor: OverviewStatsKeys.CoreBreakdownsMatchesDraws,
    title: "Matches Draw",
    format: commaDisplays,
    biggerBetter: false,
  },
  [OverviewStatsKeys.CoreBreakdownsAssistsEmp]: {
    accessor: OverviewStatsKeys.CoreBreakdownsAssistsEmp,
    title: "Assists Emp",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreKDA]: {
    accessor: OverviewStatsKeys.CoreKDA,
    title: "KDA",
    format: fixedThreePlaces,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreKDR]: {
    accessor: OverviewStatsKeys.CoreKDR,
    title: "KDR",
    format: fixedThreePlaces,
    biggerBetter: true,
  },
  [OverviewStatsKeys.CoreTotalScore]: {
    accessor: OverviewStatsKeys.CoreTotalScore,
    title: "Total Score",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.TimePlayedSeconds]: {
    accessor: OverviewStatsKeys.TimePlayedSeconds,
    title: "Time Played (seconds)",
    format: commaDisplays,
    biggerBetter: true,
  },
  [OverviewStatsKeys.TimePlayedHuman]: {
    accessor: OverviewStatsKeys.TimePlayedHuman,
    title: "Time Played (human)",
    format: doNothing,
    biggerBetter: true, // ehhh not really idk what to do for this :)
  },
};

export const getStatOptions = (options: OverviewStatsKeys[]) => {
  return options.map((key) => formatterMap[key]);
};

export const getStatOption = (option: OverviewStatsKeys) => {
  return formatterMap[option];
};

export const getStat = (stats: OverviewStats, accessor: OverviewStatsKeys) => get(stats, accessor);

export const formatStat = (key: OverviewStatsKeys, value: number | string) => {
  const option = getStatOption(key);
  return option.format(value);
};

export const getFormattedStat = (stat: OverviewStats, accessor: OverviewStatsKeys) => {
  const value = getStat(stat, accessor);
  return formatStat(accessor, value);
};

interface Preset {
  count: number;
  wins: OverviewStatsKeys[];
}

interface BetterStatsResult {
  me: Preset;
  them: Preset;
  draw: Preset;
}

type BetterStatsResultKey = keyof BetterStatsResult;

export const getBetterStatsCount = (statKeys: OverviewStatsKeys[], meStats: OverviewStats, themStats: OverviewStats) => {
  const result: BetterStatsResult = {
    me: {
      count: 0,
      wins: [],
    },
    them: {
      count: 0,
      wins: [],
    },
    draw: {
      count: 0,
      wins: [],
    },
  };

  statKeys.forEach((key) => {
    const { biggerBetter } = getStatOption(key);
    const meValue = getStat(meStats, key);
    const themValue = getStat(themStats, key);
    let winner: BetterStatsResultKey;
    if (meValue === themValue) {
      winner = "draw";
    } else if (biggerBetter ? meValue > themValue : meValue < themValue) {
      winner = "me";
    } else {
      winner = "them";
    }
    const { wins, count } = result[winner];
    result[winner].count = count + 1;
    result[winner].wins = [...wins, key];
  });
  return result;
};
