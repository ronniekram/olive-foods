import type { AppProps } from "next/app";

import GlobalStyles from "@/style/global";
import { micro, gentle } from "@/utils/fonts";

import NavBar from "@/components/layout/nav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <div className={`${gentle.variable} ${micro.variable}`} tw="antialiased">
      <NavBar />
      <main tw="mt-16 md:(mt-24) xl:(mt-[149px])">
        <Component {...pageProps} />
      </main>
      </div>
    </>
  );
};
