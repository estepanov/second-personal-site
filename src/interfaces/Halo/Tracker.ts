export interface RecentLookup {
  gamerTag: string;
  date: string;
}

export interface TrackerOverview {
  recentLookups: RecentLookup[];
  todaysCount: number;
  yesterdayCount: number;
  weekCount: number;
  lastWeekCount: number;
  monthCount: number;
  lastMonthCount: number;
}
