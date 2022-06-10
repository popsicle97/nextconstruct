import { ActionIcon, Badge, Button, Container, Divider, List, Navbar, Tab, Tabs, Title, Tooltip } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { ReactElement } from "react";
import { ClipboardList, ClipboardText, LayoutDashboard, ListDetails, Logout, Settings, UserCircle, Users } from "tabler-icons-react";
import { PageRoutes } from "../interfaces/PageRoutes";
import LogoButton from "./LogoButton";

const a_pageRoutes: Array<PageRoutes> = [
    { name: "Home", route: "/a_home", icon: (<LayoutDashboard />) },
    { name: "Product Management", route: "/product/a_productListing", icon: <ListDetails /> },
    { name: "Brand Management", route: "/product/a_brandListing", icon: <ClipboardList /> },
    { name: "Category Management", route: "/product/a_categoryListing", icon: <ClipboardText /> },
    { name: "User Management", route: "/a_users", icon: <Users /> },
];

const LinkButton = React.forwardRef(({ onClick, href, prop, icon }: { onClick: any, href: any, prop: string, icon?: ReactElement }, ref: React.LegacyRef<HTMLAnchorElement>) => {
    return (
        <div className="text-md text-slate-700 font-semibold flex place-items-center p-1 space-x-1 my-3">
            {icon}
            <a href={href} onClick={onClick} ref={ref}>{prop}</a>
        </div>
    )
})

export default function AdminLayout({ children }: { children: ReactElement }) {

    const avatar = (
        <UserCircle />
    )

    const pageRoutes = a_pageRoutes.map((page: PageRoutes, index) => (
        <li key={index} className="my-6">
            <Link href={`/internal${page.route}`} passHref>
                <LinkButton prop={page.name} onClick={() => { }} href={`/internal${page.route}`} icon={page.icon} />
            </Link>
            {/* 
            {
                page.subRoutes?.length ?
                    <ul>
                        {
                            page.subRoutes.map((sub_page) => (
                                <li>
                                    <Link href={}>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    : <></>
            } */}
        </li>

    ))

    return (
        <div className="flex flex-row">
            <Navbar className="shadow-sm border-0" p="md" width={{ base: 300, sm: 250, xs: 100 }} >
                <Navbar.Section className="flex justify-between place-items-center">
                    <Badge color="green" size="lg" leftSection={avatar}>Amery Tan</Badge>
                    <Tooltip label="Sign out" withArrow>
                        <ActionIcon>
                            <Logout />
                        </ActionIcon>
                    </Tooltip>
                </Navbar.Section>
                <Navbar.Section grow pt={50}>
                    {/* <Divider label="Internal Use Only" labelPosition="center"></Divider> */}
                    <ul>
                        {pageRoutes}
                    </ul>
                </Navbar.Section>
                <Navbar.Section>
                    <Divider></Divider>
                    <div className="flex justify-center">
                        <LogoButton></LogoButton>
                    </div>
                </Navbar.Section>
            </Navbar>
            <main className=" h-screen p-0 m-0 bg-slate-50 flex-1">
                <Container className=" h-full" p="md" pl={"lg"} fluid>
                    {children}
                </Container>
            </main>
        </div>

    )
} ``