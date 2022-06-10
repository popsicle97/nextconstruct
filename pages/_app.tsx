import "../styles/globals.css";
import type { AppProps } from "next/app";
import SharedLayout from "../components/SharedLayout";
import { ModalsProvider } from "@mantine/modals";
import { PageRoutes } from "../interfaces/PageRoutes";
import { Global, MantineProvider } from "@mantine/styles";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import Head from "next/head";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <MantineProvider
      theme={{
        fontFamily: "Inter, sans-serif",
        fontFamilyMonospace: "Inter, sans-serif",
        headings: { fontFamily: "Inter, sans-serif" },
      }}>

   
      <Head>
        <title>ANC Venture Sdn Bhd</title>

      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  )


  // {/* <SharedLayout> */ }
  // {/* </SharedLayout> */ }

  //  getLayout(<Component {...pageProps} />)


}

