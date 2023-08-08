import { GRANT_CONFIGS, PAGE_SIZE } from "consts";
import { GrantFilterOption, TGrant } from "types";
import { ListGrantsDocument, SearchGrantsDocument } from "gql/generated/graphql";
import { useEffect, useMemo, useState } from "react";

import _ from "lodash";
import { toast } from "react-hot-toast";
import { useETHBalances } from "web3/hooks/useETHBalance";
import { usePublicClient } from "wagmi";
import { useQuery } from "@apollo/client";

interface IUseGrantsQueryParams {
  filter: GrantFilterOption;
  searchQuery: string;
  pageSize?: number;
}

export const useGrantsQuery = ({
  filter,
  searchQuery,
  pageSize = PAGE_SIZE,
}: IUseGrantsQueryParams) => {
  const publicClient = usePublicClient();
  const [mappedGrants, setMappedGrants] = useState<TGrant[]>([]);
  const [isFetchingBalance, setFetchingBalance] = useState(false);
  const { getETHBalances } = useETHBalances();
  const variables = useMemo(
    () => ({
      query: `'${searchQuery}'`,
      skip: 0,
      first: pageSize,
    }),
    [pageSize, searchQuery],
  );

  const { data, loading, ...useQueryResult } = useQuery(
    searchQuery.trim().length !== 0 ? SearchGrantsDocument : ListGrantsDocument,
    { variables, notifyOnNetworkStatusChange: true },
  );

  useEffect(() => {
    setMappedGrants([]);
  }, [filter]);

  useEffect(() => {
    const getBalancesAndFilter = async () => {
      let grants: TGrant[] = data?.grantSearch ?? (data as any)?.grants ?? [];

      if (grants.length === 0) {
        return setMappedGrants([]);
      }

      grants = _(grants)
        .map((grant) => ({
          ...grant,
          ...(GRANT_CONFIGS[grant.id] ?? {}),
        }))
        .filter((grant) => {
          const { isHidden = false, isOfficial = false, currentRound } = grant;

          if (isHidden) {
            return false;
          }

          const isActive = Boolean(currentRound);

          switch (filter) {
            case GrantFilterOption.Official:
              return isOfficial && isActive;
            case GrantFilterOption.Active:
              return isActive;
            case GrantFilterOption.Completed:
              return !isActive;
          }
        })
        .value();

      try {
        setFetchingBalance(true);

        const balances = await getETHBalances(_.map(grants, "vault.id"));

        setFetchingBalance(false);

        setMappedGrants(
          _(grants)
            .map((grant, index) => ({
              ...grant,
              currentRound: { ...grant.currentRound, raised: balances[index] },
            }))
            .orderBy((grant) => -parseFloat(grant?.currentRound?.raised?.formatted ?? "0"))
            .value(),
        );
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        setFetchingBalance(false);
        toast.error("Something went wrong...", { id: "grantMapFailed" });
      }
    };

    getBalancesAndFilter();
  }, [filter, data, publicClient, pageSize, getETHBalances]);

  return {
    data: mappedGrants,
    loading: loading || isFetchingBalance,
    ...useQueryResult,
  };
};
