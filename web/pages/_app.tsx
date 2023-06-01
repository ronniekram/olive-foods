import type { AppProps } from "next/app";
import "twin.macro";

import GlobalStyles from "@/style/global";
import { micro, gentle } from "@/utils/fonts";

import NavBar from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <div className={`${gentle.variable} ${micro.variable}`} tw="antialiased flex flex-col min-h-screen bg-green-100">
        <NavBar />
        <main tw="mt-20 md:(mt-24) xl:(mt-[120.79px])">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
};
