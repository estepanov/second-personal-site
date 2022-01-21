export interface RecentLookup {
  gamerTag: string;
  date: string;
}

export interface TrackerOverview {
  recentLookups: RecentLookup[];
  todayCount: number;
  yesterdayCount: number;
  weekCount: number;
  lastWeekCount: number;
  monthCount: number;
  lastMonthCount: number;
}
