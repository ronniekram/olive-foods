/* eslint-disable no-secrets/no-secrets */
import type { AppProps } from "next/app";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import "twin.macro";

import GlobalStyles from "@/style/global";
import { micro, gentle } from "@/utils/fonts";

import NavBar from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import config from "../next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isMenu = router.asPath.includes(`menus`);

  return (
    <>
      <DefaultSeo {...config} />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3TZHCSR4JQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag("config", "G-3TZHCSR4JQ");
        `}
      </Script>
      <GlobalStyles />
      <div
        className={`${gentle.variable} ${micro.variable}`}
        tw="antialiased! flex flex-col min-h-screen bg-green-100"
      >
        {isMenu ? (
          <Component {...pageProps} />
        ) : (
          <>
            <NavBar />
            <main tw="mt-20 md:(mt-24) xl:(mt-[120.79px])">
              <Component {...pageProps} />
            </main>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
