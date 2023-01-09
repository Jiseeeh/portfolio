import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import Navbar from "@feature/navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </>
  );
}
