import "@/styles/globals.css";
import { defineCustomElements } from 'gov-gui/loader';

export default function App({ Component, pageProps }) {
  defineCustomElements();

  return <Component {...pageProps} />;
}
