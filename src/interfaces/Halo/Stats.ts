export interface CoreStats {
  summary: {
    kills: number;
    deaths: number
    assists: number
    betrayals: number
    suicides: number
    vehicles: {
      destroys: number
      hijacks: number
    }
    medals: number
  }
  damage: {
    taken: number
    dealt: number
    average: number
  }
  shots: {
    fired: number
    landed: number
    missed: number
    accuracy: number
  }
  breakdowns: {
    kills: {
      melee: number
      grenades: number
      headshots: number
      power_weapons: number
    }
    assists: {
      emp: number
      driver: number
      callouts: number
    }
    matches: {
      wins: number;
      losses: number;
      left: number;
      draws: number;
    }
  },
  kda: number;
  kdr: number;
  total_score: number;
}

export interface TimePlayed {
  seconds: number,
  human: string
}

export interface OverviewStats {
  core: CoreStats;
  matches_played: number;
  time_played: TimePlayed;
  win_rate: number;
}

export interface StatsResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface TagOverviewStats {
  name: string;
  data: OverviewStats;
}

export interface CompareStatsBody {
  me: OverviewStats
  tag: TagOverviewStats
}
