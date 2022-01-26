import { SWRConfig, SWRConfiguration } from "swr";
import { FC } from "react";

const SWR_CONFIG: SWRConfiguration = {
  fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
  errorRetryCount: 3,
  errorRetryInterval: 6000,
};

export const SWRProvider: FC = ({ children }) => {
  return <SWRConfig value={SWR_CONFIG}>{children}</SWRConfig>;
};
