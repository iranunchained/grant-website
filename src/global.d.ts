declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_NETWORK: "goerli" | "mainnet";
      NEXT_PUBLIC_ALCHEMY_API_KEY: string | undefined;
      NEXT_PUBLIC_SITE_URL: string | undefined;
      NEXT_PUBLIC_THE_GRAPH_URL: string | undefined;
      NEXT_PUBLIC_WEB3_STORAGE_TOKEN: string | undefined;
      NEXT_PUBLIC_DAO_ADDRESS: string | undefined;
      NEXT_PUBLIC_VAULT_CONTRACT_FACTORY_ADDRESS: string | undefined;
      NEXT_PUBLIC_V2_URL: string | undefined;
    }
  }
}

export {};
