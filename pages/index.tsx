import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import SharedLayout from "../components/SharedLayout";
import styles from "../styles/Home.module.css";

export default function Home()  {
  return (
    <div>
      Stuff
    </div>
  );
};

Home.getLayout = function getLayout(page  : ReactElement) {
  return (
      <SharedLayout>
        {page}
      </SharedLayout>
  )
}