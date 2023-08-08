import { Create } from "features";
import { NextPage } from "next";
import { TitleAndMetaTags } from "components";

const CreatePage: NextPage = () => (
  <>
    <TitleAndMetaTags pageTitle="Create a Grant" />
    <Create />
  </>
);

export default CreatePage;
