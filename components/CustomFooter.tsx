import { Container, Divider, List, SimpleGrid, Stack, Title, Text, Group, ActionIcon, Button, Grid, Footer } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { DeviceMobile, Mail, Map2 } from "tabler-icons-react";
import { PageRoutes } from "../interfaces/PageRoutes";

const businessHours = [
    { day: "Mon", time: "8:30 AM - 5:30 PM" },
    { day: "Tue", time: "8:30 AM - 5:30 PM" },
    { day: "Wed", time: "8:30 AM - 5:30 PM" },
    { day: "Thu", time: "8:30 AM - 5:30 PM" },
    { day: "Fri", time: "8:30 AM - 5:30 PM" },
    { day: "Sat", time: "8:30 AM - 12:30 PM" },
    { day: "Sun", time: "Closed" }

]

// "Mon:   8:30 AM – 5:30 PM",
// "Tue:	8:30 AM – 5:30 PM",
// "Wed:	8:30 AM – 5:30 PM",
// "Thu:	8:30 AM – 5:30 PM",
// "Fri:	8:30 AM – 5:30 PM",
// "Sat:	8:30 AM – 12:30 PM",
// "Sun:	Closed"
export default function CustomFooter({ pageRoutes }: { pageRoutes: Array<PageRoutes> }) {

    return (
        <Footer className="bg-gray-50 border-t pt-2 pb-2" height={"100%"}>
            <Divider className="my-6" labelPosition="center" size={0} label={
                <>
                    {/* <LogoButton /> */}
                    <span>
                        Copyright © ANC Venture Sdn Bhd. All rights reserved.
                    </span>
                </>
            } />
            <Container>

                <SimpleGrid cols={3} spacing={50}>
                    <Stack>
                        <Title order={5} >Overview</Title>
                        <List spacing={4} size="sm">
                            {
                                pageRoutes.map((page: PageRoutes, index) => (
                                    <List.Item key={index}>
                                        <Link href={page.route} >
                                            <a>
                                                {page.name}
                                            </a>
                                        </Link>
                                    </List.Item>
                                ))
                            }
                        </List>
                    </Stack>
                    <Stack>
                        <Title order={5}>Business Hours</Title>
                        <SimpleGrid cols={2} spacing={1} className="w-45">
                            {
                                businessHours.map((data, index) => (
                                    <div key={index}>
                                        <Text size={'sm'} weight={500}>
                                            {data.day}
                                        </Text>
                                        <Text size={'xs'} >
                                            {data.time}
                                        </Text>
                                    </div>
                                ))
                            }
                        </SimpleGrid>
                    </Stack>
                    <Stack>
                        <Group>
                            <Map2></Map2>
                            <Title order={5}>Where we are</Title>
                        </Group>
                        <Text size="xs">
                            28, Jalan Kikik
                            Taman Inderawasih
                            13600 Perai
                            Pulau Pinang
                            Malaysia
                        </Text>
                        <Link
                            href="https://www.google.com/maps/dir/ANC+Venture+Sdn.Bhd/@5.3927762,100.3161228,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x304ac428d8dcc67f:0xfbbda0786b935b2d!2m2!1d100.386166!2d5.3927672" passHref>
                            <a className="rounded-md p-2 text-center bg-violet-500 text-white shadow-md">Get direction</a>
                        </Link>
                    </Stack>
                </SimpleGrid>
                <Divider className="mt-5 mb-2"></Divider>
                <Group>
                    <Title order={5}>Contact Us :</Title>
                    <Button size="xs" variant="subtle" color="dark" leftIcon={<DeviceMobile />}>
                        04-398 2040
                    </Button>
                    <Button size="xs" variant="subtle" color="dark" leftIcon={<DeviceMobile />}>
                        012-418 6040
                    </Button>
                    <Button size="xs" variant="subtle" color="dark" leftIcon={<DeviceMobile />}>
                        012-438 0570
                    </Button>
                    <Button size="xs" variant="subtle" color="dark" leftIcon={<Mail />}>
                        saramdee97@gmail.com
                    </Button>
                </Group>
            </Container>
        </Footer>
    )

}