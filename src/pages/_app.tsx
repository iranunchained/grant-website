import "assets/fonts/line-awesome-1.3.0/css/line-awesome.min.css";
import "@rainbow-me/rainbowkit/styles.css";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "styles/globals.css";

import { ClientOnly, Footer, Header } from "components";
import { ComponentType, FC, useMemo, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, cssStringFromTheme } from "@rainbow-me/rainbowkit";
import { ThemeProvider, useTheme } from "next-themes";
import { chains, wagmiConfig } from "consts/web3";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
import { customThemes } from "styles/rainbowCustomTheme";
import { useApollo } from "libs";
import { useSmoothScroll } from "hooks/useSmoothScroll";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    Layout?: ComponentType;
  };
};

const Web3Wrapper: FC<Pick<AppProps, "Component" | "pageProps">> = ({ Component, pageProps }) => {
  const { theme } = useTheme();
  const rainbowTheme = useMemo(
    () => customThemes[`${theme ?? "light"}Theme` as keyof typeof customThemes],
    [theme],
  );

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={rainbowTheme}>
        <main className="flex flex-col min-h-full">
          <style
            dangerouslySetInnerHTML={{
              __html: `
            :root {
              ${cssStringFromTheme(customThemes.darkTheme)}
            }

            html.light {
              ${cssStringFromTheme(customThemes.lightTheme, {
                extends: customThemes.darkTheme,
              })}
            }
          `,
            }}
          />
          <div className="flex flex-col flex-1 text-base bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
            <Header />
            <Component {...pageProps} />
            <GoogleAnalytics trackPageViews />
            <Footer />
          </div>
        </main>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

const App: FC<ComponentWithPageLayout> = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());
  const apolloClient = useApollo(pageProps);

  useSmoothScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Hydrate state={pageProps.dehydratedState}>
            <Web3Wrapper Component={Component} pageProps={pageProps} />
            <ClientOnly>
              <Toaster
                position="top-center"
                toastOptions={{ className: "dark:bg-neutral-800 dark:text-neutral-200 bg-white" }}
              />
            </ClientOnly>
          </Hydrate>
        </ThemeProvider>
      </ApolloProvider>
    </QueryClientProvider>
  );
};

export default App;
