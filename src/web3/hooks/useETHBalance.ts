import { Address, usePublicClient } from "wagmi";
import { ETH_BALANCE_CHECKER_ADDRESS, clientToProvider } from "consts";
import { useCallback, useMemo } from "react";

import { formatEther } from "@ethersproject/units";
import { getAddressesBalances } from "eth-balance-checker/lib/ethers";
import { toast } from "react-hot-toast";

export const useETHBalance = () => {
  const publicClient = usePublicClient();

  const getETHBalance = useCallback(
    async (address: Address) => {
      try {
        const balance = await publicClient.getBalance({ address });
        const balanceValue = formatEther(balance);

        return { value: balanceValue, formatted: `${balanceValue} ETH` };
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        toast.error("Failed to fetch vault balance.", { id: "failedVaultBalance" });

        return { value: "0", formatted: "0 ETH" };
      }
    },
    [publicClient],
  );

  return { getETHBalance };
};

const ETH_ADDRESS = "0x0000000000000000000000000000000000000000";

export const useETHBalances = () => {
  const publicClient = usePublicClient();
  const provider = useMemo(() => clientToProvider(publicClient), [publicClient]);

  const getETHBalances = useCallback(
    async (addresses: Address[]) => {
      try {
        const balances = await getAddressesBalances(provider, addresses, [ETH_ADDRESS], {
          contractAddress: ETH_BALANCE_CHECKER_ADDRESS,
        });

        return addresses.map((a) => {
          const value = balances[a][ETH_ADDRESS];

          return { value, formatted: `${formatEther(value)} ETH` };
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        toast.error("Failed to fetch vault balances.", { id: "failedVaultBalances" });

        return addresses.map(() => ({ value: "0", formatted: "0 ETH" }));
      }
    },
    [provider],
  );

  return { getETHBalances };
};
