import useSWR from "swr";
import { OverviewStats, StatsResponse } from "../interfaces/Halo/Stats";
import { api } from "../Request";
import { mockOverviewStats, mockPvpCompareStats, mockTrackerOverviewStats } from "../utils/haloStatFormatter";

export enum HaloEndPoints {
  statsTrackerOverview = "/halo/stats-tracker/overview",
  overview = "/halo/stats/overview",
  recentMatches = "/halo/stats/recent-matches",
  pvp = "/halo/stats/pvp",
  pvpCompare = "/halo/stats/pvp/compare",
}

// export enum HaloExperienceType {
//   PVP = "pvp-only",
//   BOTS = "pve-bots",
//   CUSTOM = "custom",
//   FEATURED = "featured",
//   ARENA = "arena",
//   BTB = "btb",
//   ALL = "all",
// }

const resolveMockDate = (endpoint: string) => {
  switch (endpoint) {
    case HaloEndPoints.overview:
      return Promise.resolve(mockOverviewStats());
    case HaloEndPoints.statsTrackerOverview:
      return Promise.resolve(mockTrackerOverviewStats());
    case HaloEndPoints.pvpCompare:
      return Promise.resolve(mockPvpCompareStats("rando"));
    default:
      return Promise.resolve({} as any);
  }
};

const useHaloStats = <T>(endpoint: string): [T | undefined, boolean, string | null] => {
  const { data, error, isValidating } = useSWR(endpoint, (url: string) =>
    // ARCHIVED REPO: removing backend
    // api.get<StatsResponse<T>>(url).then((res) => {
    //   return res.data?.data;
    // })
    resolveMockDate(endpoint),
  );
  return [data, isValidating, error];
};

export default useHaloStats;
