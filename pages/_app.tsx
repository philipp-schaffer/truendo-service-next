import type { AppProps } from 'next/app'
import './global.css'
import "./left-bar.css";
import "./navbar.css";
import "./hero.css";
import "./vendors.css";
import "./popularlist.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
