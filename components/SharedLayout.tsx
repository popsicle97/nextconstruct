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
    <div className="w-full h-full">
      <CustomHeader pageRoutes={pageRoutes}></CustomHeader>
      <main>
        {children}
      </main>
      <CustomFooter pageRoutes={pageRoutes}></CustomFooter>
    </div>
  );
}
