export interface RecentLookup {
  gamerTag: string;
  date: string;
}

export interface TrackerOverview {
  recentLookups: RecentLookup[];
  todaysCount: number;
  monthCount: number;
}
