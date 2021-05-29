import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
