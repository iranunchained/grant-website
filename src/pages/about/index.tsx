import { NextPage } from "next";

import { TitleAndMetaTags } from "components";
import { About } from "features";

const AboutPage: NextPage = () => (
  <>
    <TitleAndMetaTags pageTitle="About Us" />
    <About />
  </>
);

export default AboutPage;
