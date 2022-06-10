import { Header, MediaQuery, Burger, Group, Drawer, Divider, Box, Image, Button } from "@mantine/core";
import React, { useState } from "react";
import CartButton from "./CartButton";
import Link from "next/link"
import DrawerLinks from "./DrawerLinks";
import DrawerProfile from "./DrawerProfile";
import HeaderLinks from "./HeaderLinks";
import LoginModal from "./modals/LoginModal";
import { PageRoutes } from "../interfaces/PageRoutes";
import LogoButton from "./LogoButton";


export default function CustomHeader({ pageRoutes }: { pageRoutes: Array<PageRoutes> }) {

    const [opened, setOpened] = useState(false);

    return (
        <div>
            <Header height={80} p="xs" className="sticky">
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

                    <LogoButton></LogoButton>

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
        </div>
    )
}