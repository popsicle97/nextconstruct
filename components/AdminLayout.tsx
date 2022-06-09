import { ActionIcon, Badge, Button, Container, Divider, List, Navbar, Title, Tooltip } from "@mantine/core";
import Link from "next/link";
import { ReactElement } from "react";
import { LayoutDashboard, ListDetails, Logout, Settings, UserCircle, Users } from "tabler-icons-react";
import { PageRoutes } from "../interfaces/PageRoutes";
import LogoButton from "./LogoButton";

const a_pageRoutes: Array<PageRoutes> = [
    { name: "Home", route: "/a_home", icon: (<LayoutDashboard />) },
    { name: "Product Management", route: "/a_products", icon: <ListDetails /> },
    { name: "User management", route: "/a_users", icon: <Users /> },
];


export default function AdminLayout({ children }: { children: ReactElement }) {

    const avatar = (
        <UserCircle />
    )

    const pageRoutes = a_pageRoutes.map((page: PageRoutes, index) => (
        <Link href={`/internal${page.route}`} key={index}>
            <List.Item className="flex place-items-center px-2 py-2 rounded-full hover:bg-green-500 hover:text-white hover:cursor-pointer text-slate-700" icon={page.icon ? page.icon : undefined}>
                {page.name}
            </List.Item>
        </Link>
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
                    <List spacing={'xl'}>
                        {pageRoutes}
                    </List>
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