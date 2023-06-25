import Layout from "@/components/layout/Layout";
import { UiCtxProvider } from "@/context/ui-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiCtxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UiCtxProvider>
  );
}
