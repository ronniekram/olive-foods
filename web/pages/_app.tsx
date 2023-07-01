import type { AppProps } from "next/app";
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
  const isLegal = router.asPath.includes(`legal`);

  return (
    <>
      <DefaultSeo {...config} />
      <GlobalStyles />
      <div
        className={`${gentle.variable} ${micro.variable}`}
        tw="antialiased flex flex-col min-h-screen bg-green-100"
      >
        {isMenu || isLegal ? (
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
