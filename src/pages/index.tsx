import { Home } from "features";
import { NextPage } from "next";
import { TitleAndMetaTags } from "components";

const HomePage: NextPage = () => (
  <>
    <TitleAndMetaTags pageTitle="Home" />
    <Home />
  </>
);

export default HomePage;
