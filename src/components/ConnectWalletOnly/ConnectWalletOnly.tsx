import { ClientOnly } from "components";
import ConnectWalletButton from "./ConnectWalletButton";
import React from "react";
import { useAccount } from "wagmi";

const ConnectWalletOnly: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isConnected } = useAccount();

  return (
    <ClientOnly>
      <>{isConnected ? children : <ConnectWalletButton />}</>
    </ClientOnly>
  );
};

export default ConnectWalletOnly;
