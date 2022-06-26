import type { AppProps } from "next/app";
import "@fontsource/poppins";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return <Component {...pageProps} />;
}

export default MyApp;
