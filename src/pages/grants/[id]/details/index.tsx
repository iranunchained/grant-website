import {
  GetGrantDetailsDocument,
  GetGrantDetailsQuery,
  ListGrantIDsDocument,
  ListGrantIDsQuery,
} from "gql/generated/graphql";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Buffer } from "buffer";
import { Details } from "features";
import { GRANT_CONFIGS } from "consts";
import { TGrant } from "types";
import { TitleAndMetaTags } from "components";
import { getGraph } from "libs/gql-request";
import { maxFileSize } from "utils/resizeImage/config";
import { resizeImage } from "utils/resizeImage/server";

interface Props {
  grant: TGrant;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { grants } = await getGraph<ListGrantIDsQuery>(ListGrantIDsDocument, {
    first: 1000,
    skip: 0,
  });

  return {
    paths: grants.map(({ id }) => ({ params: { id } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const data = await getGraph<GetGrantDetailsQuery>(GetGrantDetailsDocument, ctx.params);

  if (!data.grant) {
    return { notFound: true };
  }

  if (Buffer.from(data.grant.image).length > maxFileSize) {
    data.grant.image = await resizeImage(data.grant.image);
  }

  const config = GRANT_CONFIGS[data.grant.id] ?? {};
  const grant: TGrant = { ...data.grant, ...config };

  return {
    props: { grant },
    revalidate: 60 * 60 * 24 * 7, // 7 days
  };
};

const GrantDetailsPage: NextPage<Props> = ({ grant }) =>
  grant ? (
    <>
      <TitleAndMetaTags
        description={grant.description}
        imageURL={grant.image}
        pageTitle={grant.title}
      />
      <Details grant={grant} id={grant.id} />
    </>
  ) : null;

export default GrantDetailsPage;
