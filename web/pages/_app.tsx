import type { AppProps } from "next/app";

import GlobalStyles from "@/style/global";
import { micro, gentle } from "@/utils/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <main className={`${gentle.variable} ${micro.variable}`} tw="antialiased">
        <Component {...pageProps} />
      </main>
    </>
  );
};
