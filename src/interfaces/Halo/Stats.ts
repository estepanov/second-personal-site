export interface CoreStats {
  summary: {
    kills: number;
    deaths: number;
    assists: number;
    betrayals: number;
    suicides: number;
    vehicles: {
      destroys: number;
      hijacks: number;
    };
    medals: number;
  };
  damage: {
    taken: number;
    dealt: number;
    average: number;
  };
  shots: {
    fired: number;
    landed: number;
    missed: number;
    accuracy: number;
  };
  breakdowns: {
    kills: {
      melee: number;
      grenades: number;
      headshots: number;
      power_weapons: number;
    };
    assists: {
      emp: number;
      driver: number;
      callouts: number;
    };
    matches: {
      wins: number;
      losses: number;
      left: number;
      draws: number;
    };
    medals: HaloApiMedal[];
  };
  kda: number;
  kdr: number;
  total_score: number;
}

export interface TimePlayed {
  seconds: number;
  human: string;
}

export interface OverviewStats {
  core: CoreStats;
  matches_played: number;
  time_played: TimePlayed;
  win_rate: number;
  fetchedOn: string; // not from original API
  type: string; // not from original API - pvp,pve,btb, etc
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
  me: OverviewStats;
  tag: TagOverviewStats;
}

export interface HaloApiAsset {
  id: string;
  version: string;
  thumbnail_url: string;
}

export interface HaloApiMedal {
  id: number;
  name: string;
  count: number;
  image_urls: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface RecentMatch {
  id: string;
  details: {
    category: {
      name: string;
      asset: HaloApiAsset;
    };
    map: {
      name: string;
      asset: HaloApiAsset;
    };
    playlist: {
      name: string;
      asset: HaloApiAsset;
      properties: {
        queue: null | string;
        input: null | string;
        ranked: boolean;
      };
    };
  };
  teams: {
    enabled: boolean;
    scoring: boolean;
  };
  player: {
    team: {
      id: number;
      name: string;
      emblem_url: string;
    };
    stats: {
      core: {
        summary: {
          kills: number;
          deaths: number;
          assists: number;
          betrayals: number;
          suicides: number;
          vehicles: {
            destroys: number;
            hijacks: number;
          };
          medals: number;
        };
        damage: {
          taken: number;
          dealt: number;
        };
        shots: {
          fired: number;
          landed: number;
          missed: number;
          accuracy: number;
        };
        rounds: {
          won: number;
          lost: number;
          tied: number;
        };
        breakdowns: {
          kills: {
            melee: number;
            grenades: number;
            headshots: number;
            power_weapons: number;
          };
          assists: {
            emp: number;
            driver: number;
            callouts: number;
          };
          medals: HaloApiMedal[];
        };
        kda: number;
        kdr: number;
        score: number;
        points: number;
      };
      mode: null;
    };
    rank: number;
    outcome: string;
    participation: {
      joined_in_progress: boolean;
      presence: {
        beginning: boolean;
        completion: boolean;
      };
    };
    progression: null;
  };
  experience: string;
  played_at: string;
  duration: {
    seconds: number;
    human: string;
  };
}

export interface RecentMatchesBody {
  games: RecentMatch[];
  fetchedOn: string;
  mode: string;
}
