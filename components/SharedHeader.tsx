import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  Text,
  Group,
  ActionIcon,
  Image,
  Button,
  Box,
  Drawer,
  Divider,
  Container,
  Affix,
  Transition,
  Portal,
  Footer,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { ModalsProvider } from "@mantine/modals";
import Link from "next/link";
import React, { useState } from "react";
import { UserCircle } from "tabler-icons-react";
import { PageRoutes } from "../interfaces/PageRoutes";
import CartButton from "./CartButton";
import DrawerLinks from "./DrawerLinks";
import DrawerProfile from "./DrawerProfile";
import HeaderLinks from "./HeaderLinks";
import LoginModal from "./modals/LoginModal";

const pageRoutes: Array<PageRoutes> = [
  { name: "Home", route: "/" },
  { name: "Products", route: "/products" },
  { name: "Services", route: "/services" },
  { name: "News & Promotios", route: "/newspromo" },
  { name: "Project References", route: "/projectref" },
  { name: "About us", route: "/aboutus" },
  { name: "Contact Us", route: "/contactus" },
];

export default function SharedHeader({ children }: { children: any }) {
  const [opened, setOpened] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div className="w-full h-full">
      <Header height={80} p="xs">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
            <Box>
              <Burger
                size={"sm"}
                opened={opened}
                onClick={() => setOpened((o) => !o)}
              />
            </Box>
          </MediaQuery>

          <Link href="/">
            <div className="hover:cursor-pointer">
              <Image
                width={100}
                src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png"
              ></Image>
            </div>
          </Link>

          <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
            <Box>
              <HeaderLinks pageRoutes={pageRoutes}></HeaderLinks>
            </Box>
          </MediaQuery>

          <Group>
            <CartButton></CartButton>
            <LoginModal></LoginModal>
          </Group>
        </Box>
      </Header>
      <Drawer
        opened={opened}
        title={
          <div className="pt-5 px-5">
            <DrawerProfile></DrawerProfile>
            <Divider
              className="mt-5 w-full"
              size={1}
              label="Menu"
              labelPosition="center"
            ></Divider>
          </div>
        }
        onClose={() => setOpened(false)}
      >
        <DrawerLinks pageRoutes={pageRoutes}></DrawerLinks>
      </Drawer>
        {children}
          {/* <Footer height={10} p="md">
          Foot
        </Footer> */}

    </div>
  );
}
