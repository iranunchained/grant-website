import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectWalletButton = () => (
  <ConnectButton
    accountStatus={{
      smallScreen: "avatar",
      largeScreen: "full",
    }}
    showBalance={{ smallScreen: false, largeScreen: true }}
  />
);

export default ConnectWalletButton;
