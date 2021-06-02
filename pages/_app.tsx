import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { AuthContextProvider } from "../context/authContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
