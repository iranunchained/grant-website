import { BackgroundSection, BgGlassmorphism } from "components";

import React from "react";
import SectionGridFeatureGrants from "./SectionGridFeatureGrants";
import SectionHero from "./SectionHero";

const Home: React.FC = () => (
  <div className="relative overflow-hidden nc-PageHome">
    <BgGlassmorphism />

    <div className="container relative mt-12 mb-20 space-y-20 sm:space-y-24 sm:my-24 lg:space-y-32 lg:my-32">
      <SectionHero
        className="pb-10"
        heading={
          <span>
            Support (v2) 🕊️
            <br /> Help, and Fund <br /> Grants for Iranians {` `}
            {/* <span className="relative pr-3">
                <Image alt="Vector1" className="absolute w-full bottom-3 -left-1" src={Vector1} />
                <span className="relative">Grants</span>
              </span> */}
          </span>
        }
        subHeading={
          <span className="block max-w-lg text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            Explore our newly launched IranUnchained v2 grant platform to support Iranians on{" "}
            <a
              className="text-primary-500"
              href={process.env.NEXT_PUBLIC_V2_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              IranUnchained v2
            </a>
            .
          </span>
        }
      />
    </div>

    <div
      className="container relative my-24 space-y-24 lg:space-y-32 lg:my-32 scroll-mt-24"
      id="featured-grants"
    >
      <div className="relative py-20 lg:py-28">
        <BackgroundSection />
        <SectionGridFeatureGrants />
      </div>
    </div>
  </div>
);

export default Home;
