import { Button, Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import SharedLayout from "../components/SharedLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-96 flex place-content-center place-items-center">
      <h1 >ANC Venture Sdn Bhd</h1>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <SharedLayout>
      {page}
    </SharedLayout>
  )
}