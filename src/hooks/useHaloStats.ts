import { useEffect, useState } from "react";
import { StatsResponse } from "../interfaces/Halo/Stats";
import { api } from "../Request";

export enum HaloEndPoints {
  overview = "/halo/stats/overview",
  pvp = "/halo/stats/pvp",
  pvpCompare = "/halo/stats/pvp/compare"
}

const useHaloStats = <T>(endpoint: string, params?: object) => {
 const [stats, setStats] = useState<null | T>(null)
  useEffect(() => {
    const fetch = async () => {
      const response = await api.get<StatsResponse<T>>(endpoint, { params })
      setStats(response.data.data)
    }
    fetch()
  }, [endpoint]);
  return stats
}

export default useHaloStats;
