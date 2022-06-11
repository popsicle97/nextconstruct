import { MantineProvider } from "@mantine/core";
import React, { useState } from "react";
import { PageRoutes } from "../interfaces/PageRoutes";
import CustomFooter from "./CustomFooter";

import CustomHeader from "./CustomHeader";

const pageRoutes: Array<PageRoutes> = [
  { name: "Home", route: "/" },
  { name: "Products", route: "/products" },
  { name: "Services", route: "/services" },
  { name: "News & Promotions", route: "/newspromo" },
  { name: "Project References", route: "/projectref" },
  { name: "About us", route: "/aboutus" },
  { name: "Contact Us", route: "/contactus" },
];

export default function SharedLayout({ children }: { children: any }) {

  return (
    <>
      <MantineProvider theme={{
        fontFamily: "Inter, sans-serif",
        fontFamilyMonospace: "'Inter, sans-serif",
        headings: { fontFamily: "Inter, sans-serif" },


      }}>
        <CustomHeader pageRoutes={pageRoutes}></CustomHeader>
        <main >
          {children}
        </main>
        <CustomFooter pageRoutes={pageRoutes}></CustomFooter>
      </MantineProvider>
    </>
  );
}
