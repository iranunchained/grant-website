import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { NextPage } from "next";
import SectionFounder from "./SectionFounder";
import SectionHero from "./SectionHero";
import SectionLegal from "./SectionLegal";
import SectionStatistic from "./SectionStatistic";
import rightImg from "assets/images/HomeImage.png";

export interface PageAboutProps {
  className?: string;
}

const PageAbout: NextPage<PageAboutProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageAbout overflow-hidden relative ${className}`} data-nc-id="PageAbout">
      <BgGlassmorphism />

      <div className="container py-16 space-y-16 lg:py-28 lg:space-y-28">
        <SectionHero
          btnText=""
          heading="About IranUnchained"
          rightImg={rightImg}
          subHeading="IranUnchained is a US-based NGO fundraising to provide humanitarian aid and to advance human rights in Iran."
        />

        <SectionFounder />
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div> */}

        <SectionStatistic />

        <SectionLegal />

        {/* <SectionSubscribe /> */}
      </div>
    </div>
  );
};

export default PageAbout;
