import { Banner, ConnectWalletButton } from "components";

import Logo from "components/Logo/Logo";
import MenuBar from "components/MenuBar/MenuBar";
import Navigation from "components/Navigation/Navigation";
import SwitchDarkMode from "components/SwitchDarkMode/SwitchDarkMode";

const MainNav: React.FC = () => {
  const bannerMessage = process.env.NEXT_PUBLIC_TOP_BANNER_MESSAGE;
  const showTopBanner = !!bannerMessage;

  return (
    <>
      <div className="relative z-10 nc-MainNav2">
        <div className="container relative flex items-center justify-between py-5">
          <div className="flex items-center justify-start grow">
            <Logo />
          </div>
          <div className="flex items-center justify-end flex-shrink-0 text-neutral-700 dark:text-neutral-100">
            <div className="items-center hidden space-x-2 md:flex">
              <Navigation />
              <div className="hidden h-10 border-l lg:block border-neutral-300 dark:border-neutral-6000" />
              <SwitchDarkMode />
              <ConnectWalletButton />
            </div>
            <div className="md:hidden">
              <ConnectWalletButton />
            </div>
            <div className="flex items-center space-x-1.5 lg:hidden">
              <MenuBar />
            </div>
          </div>
        </div>
      </div>
      {showTopBanner && (
        <Banner isClosable wrapperClasses="pt-3 pb-4 container">
          {bannerMessage}
        </Banner>
      )}
    </>
  );
};

export default MainNav;
