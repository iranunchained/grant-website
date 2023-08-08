import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

interface TitleAndMetaTagsProps {
  pageTitle?: string;
  description?: string;
  imageURL?: string;
}

const hostname = `https://${process.env.NEXT_PUBLIC_SITE_URL}`;

const TitleAndMetaTags: React.FC<TitleAndMetaTagsProps> = ({
  pageTitle,
  description = "IranUnchained is a US-based NGO fundraising to provide humanitarian aid and to advance human rights in Iran.",
  imageURL,
}) => {
  const router = useRouter();

  const title = pageTitle ? `${pageTitle} | IranUnchained` : "IranUnchained";
  const image = imageURL ?? `${hostname}/social.png`;
  const url = hostname + router.asPath;

  return (
    <Head>
      <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />

      <title>{title}</title>
      <meta content={description} name="description" />

      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      <meta content={url} property="og:url" />
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={image} property="og:image" />

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={hostname} property="twitter:domain" />
      <meta content={url} property="twitter:url" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={image} name="twitter:image" />

      <meta
        key="theme-color-light"
        content="#F5F6F7"
        media="(prefers-color-scheme: light)"
        name="theme-color"
      />
      <meta
        key="theme-color-dark"
        content="#0F121D"
        media="(prefers-color-scheme: dark)"
        name="theme-color"
      />
    </Head>
  );
};

export default TitleAndMetaTags;
