import { useEffect, useState } from "react";
import { StatsResponse } from "../interfaces/Halo/Stats";
import { api } from "../Request";

export enum HaloEndPoints {
  statsTrackerOverview = "/halo/stats-tracker/overview",
  overview = "/halo/stats/overview",
  recentMatches = "/halo/stats/recent-matches",
  pvp = "/halo/stats/pvp",
  pvpCompare = "/halo/stats/pvp/compare"
}

export enum HaloExperienceType {
  PVP = 'pvp-only',
  BOTS = 'pve-bots',
  CUSTOM = 'custom',
  FEATURED = 'featured',
  ARENA = 'arena',
  BTB = 'btb',
  ALL = 'all'
}

const useHaloStats = <T>(endpoint: string, params?: object): [T, boolean, string | null] => {
 const [stats, setStats] = useState<null | T>(null);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<null|string>(null);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.get<StatsResponse<T>>(endpoint, { params })
        setStats(response.data.data)
      } catch(error) {
        let errorMessage = 'Issue fetching halo stats.'
        console.error('could not fecth halo stats', error)
        if (error?.response?.data?.message) errorMessage = error.response.data.message
        setError(errorMessage);
      }
      setIsLoading(false)
      }
      fetch()
    }, [endpoint]);
  return [stats, isLoading, error]
}

export default useHaloStats;
