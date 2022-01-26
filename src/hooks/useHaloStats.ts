import useSWR from "swr";
import { StatsResponse } from "../interfaces/Halo/Stats";
import { api } from "../Request";

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

const useHaloStats = <T>(endpoint: string): [T | undefined, boolean, string | null] => {
  const { data, error, isValidating } = useSWR(endpoint, (url: string) =>
    api.get<StatsResponse<T>>(url).then((res) => {
      return res.data?.data;
    }),
  );
  return [data, isValidating, error];
};

export default useHaloStats;
