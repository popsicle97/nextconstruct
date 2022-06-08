import "../styles/globals.css";
import type { AppProps } from "next/app";
import SharedLayout from "../components/SharedLayout";
import { ModalsProvider } from "@mantine/modals";
import { PageRoutes } from "../interfaces/PageRoutes";
import { MantineProvider } from "@mantine/styles";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <ModalsProvider>
        <SharedLayout>
          <Component {...pageProps} />
        </SharedLayout>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default MyApp;
