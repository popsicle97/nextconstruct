import "../styles/globals.css";
import type { AppProps } from "next/app";
import SharedHeader from "../components/SharedHeader";
import { ModalsProvider } from "@mantine/modals";
import { PageRoutes } from "../interfaces/PageRoutes";
import { MantineProvider } from "@mantine/styles";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <ModalsProvider>
        <SharedHeader>
          <Component {...pageProps} />
        </SharedHeader>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default MyApp;
