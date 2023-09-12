/* eslint-disable no-secrets/no-secrets */
import type { AppProps } from "next/app";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";

import GlobalStyles from "@/style/global";
import { micro, gentle } from "@/utils/fonts";

import NavBar from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import config from "../next-seo.config";

const Main = styled.main`
  ${tw`mt-20 md:(mt-24) xl:(mt-[120.79px])`};
  #cookie-notification {
    font-family: "Micro Grotesk" !important;
  }
`;

const legalPages = new Set([`/privacy`, `/cookies`, `/terms`]);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isMenu = router.asPath.includes(`menus`) || router.asPath === `/privacy`;
  const isLegal = legalPages.has(router.asPath);

  return (
    <>
      <DefaultSeo
        {...config}
        additionalMetaTags={[
          {
            property: `keywords`,
            content: `Minneapolis catering, Minneapolis caterer, St. Paul catering, St. Paul caterer, Twin Cities catering, catered lunch, charcuterie boards, family style dinners, dietary restrictions, allergies, creative catering, collaborative catering, hors d'oeuvres, events, meal prep coaching, chef experiences, meal services, gourmet meal delivery, ready-to-eat meals, healthy meal delivery, fresh meal delivery, chef-prepared meals, customized meal plans, meal subscription services, home delivered meals, convienient meal solutions, nutritious meal options, weekly meal delivery,  diet-friendlt meal plans, restaurant quality meals at home`,
          },
        ]}
      />
      <Script src="https://app.enzuzo.com/apps/enzuzo/static/js/__enzuzo-cookiebar.js?uuid=ab2a1fa2-51a9-11ee-8546-1fc056a2b58d" />
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
      {isLegal ? (
        <main
          className={`${gentle.variable} ${micro.variable}`}
          tw="antialiased! flex flex-col bg-green-100 h-fit"
        >
          <NavBar />
          <Component {...pageProps} />
          {/* <Footer /> */}
        </main>
      ) : (
        <div
          className={`${gentle.variable} ${micro.variable}`}
          tw="antialiased! flex flex-col min-h-screen bg-green-100"
        >
          {isMenu ? (
            <Component {...pageProps} />
          ) : (
            <>
              <NavBar />
              <Main>
                <Component {...pageProps} />
              </Main>
              <Footer />
            </>
          )}
        </div>
      )}
    </>
  );
}
