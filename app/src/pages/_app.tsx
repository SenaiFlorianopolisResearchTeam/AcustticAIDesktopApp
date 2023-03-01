import type { AppProps } from "next/app";

import "../scss/reset.scss"
import "../scss/default.scss"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
