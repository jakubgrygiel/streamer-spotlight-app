import Layout from "@/components/layout/Layout";
import { DataCtxProvider } from "@/context/data-context";
import { UiCtxProvider } from "@/context/ui-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataCtxProvider>
      <UiCtxProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UiCtxProvider>
    </DataCtxProvider>
  );
}
