import Layout from "@/components/layout/Layout";
import { UiCtxProvider } from "@/context/ui-context";
import { SERVER_URL } from "@/services/API";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import io from "socket.io-client";

export const socket = io(SERVER_URL);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiCtxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UiCtxProvider>
  );
}
