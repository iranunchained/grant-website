import { Address, PublicClient, configureChains, createConfig } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";

import { HttpTransport } from "viem";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { providers } from "ethers";
import { publicProvider } from "wagmi/providers/public";

export const DAO_ADDRESS = process.env.NEXT_PUBLIC_DAO_ADDRESS! as Address;
if (!DAO_ADDRESS) {
  throw new Error("DAO_ADDRESS is not provided.");
}

export const VAULT_FACTORY_CONTRACT_ADDRESS = process.env
  .NEXT_PUBLIC_VAULT_CONTRACT_FACTORY_ADDRESS! as Address;
if (!VAULT_FACTORY_CONTRACT_ADDRESS) {
  throw new Error("VAULT_FACTORY_CONTRACT_ADDRESS is not provided.");
}

export const network = process.env.NEXT_PUBLIC_NETWORK!;

if (network !== "goerli" && network !== "mainnet") {
  throw new Error("NEXT_PUBLIC_NETWORK invalid, must be one of {mainnet, goerli}.");
}

export const ETH_USD_ORACLE_ADDRESS: Address =
  network === "goerli"
    ? "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"
    : "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";

export const ETH_BALANCE_CHECKER_ADDRESS: Address =
  network === "goerli"
    ? "0x9788C4E93f9002a7ad8e72633b11E8d1ecd51f9b"
    : "0xb1f8e55c7f64d203c1400b9d8555d050f94adf39";

export const alchemyAPIKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!;

if (!alchemyAPIKey) {
  throw new Error("NEXT_PUBLIC_ALCHEMY_API_KEY is not provided.");
}

export const { chains, publicClient } = configureChains(
  [network === "goerli" ? goerli : mainnet],
  [alchemyProvider({ apiKey: alchemyAPIKey }), publicProvider()],
);

export const { connectors } = getDefaultWallets({
  appName: "IranUnchained DAO",
  projectId: "389608c6036299d604198aa93fc5bc29",
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export function clientToProvider(publicClient: PublicClient) {
  const { chain, transport } = publicClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };

  if (transport.type === "fallback")
    return new providers.FallbackProvider(
      (transport.transports as ReturnType<HttpTransport>[]).map(
        ({ value }) => new providers.JsonRpcProvider(value?.url, network),
      ),
    );

  return new providers.JsonRpcProvider(transport.url, network);
}
