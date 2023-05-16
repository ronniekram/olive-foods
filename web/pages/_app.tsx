import type { AppProps } from "next/app";

import "@/styles/globals.css";
import GlobalStyles from "@/style/global";
import { micro, gentle } from "@/utils/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <main className={`${micro.variable} ${gentle.variable}`} tw="font-sans antialiased">
        <Component {...pageProps} />
      </main>
    </>
  );
};
