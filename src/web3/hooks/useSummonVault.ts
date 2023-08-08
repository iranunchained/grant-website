import { DAO_ADDRESS, VAULT_FACTORY_CONTRACT_ADDRESS } from "consts";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";

import { baalAndVaultSummonerABI } from "web3";

export const useSummonVault = (name: string) => {
  const {
    config,
    isError: isPrepareError,
    error: prepareError,
  } = usePrepareContractWrite({
    address: VAULT_FACTORY_CONTRACT_ADDRESS,
    abi: baalAndVaultSummonerABI,
    functionName: "summonVault",
    args: [DAO_ADDRESS, name],
    enabled: Boolean(name),
  });

  const {
    isError: isWriteError,
    error: writeError,
    ...restContractWriteResults
  } = useContractWrite(config);
  const { isLoading: isTransactionLoading, isSuccess: isTransactionSuccess } =
    useWaitForTransaction({
      hash: restContractWriteResults.data?.hash,
    });

  return {
    ...restContractWriteResults,
    isError: isPrepareError || isWriteError,
    error: (prepareError || writeError)?.message,
    isTransactionSuccess,
    isTransactionLoading,
  };
};
