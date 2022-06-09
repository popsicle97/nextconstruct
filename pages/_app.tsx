import "../styles/globals.css";
import type { AppProps } from "next/app";
import SharedLayout from "../components/SharedLayout";
import { ModalsProvider } from "@mantine/modals";
import { PageRoutes } from "../interfaces/PageRoutes";
import { MantineProvider } from "@mantine/styles";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
    

      // {/* <SharedLayout> */ }
      // {/* </SharedLayout> */ }

        //  getLayout(<Component {...pageProps} />)

    
}

