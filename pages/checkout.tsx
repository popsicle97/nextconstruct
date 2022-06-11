import { Button, Container, Divider, Group, Stack, Table, Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { ReactElement } from "react";
import { BrandWhatsapp } from "tabler-icons-react";
import CheckoutTable from "../components/CheckoutTable";
import SharedLayout from "../components/SharedLayout";



export default function Checkout() {


    return (
        <Container >
            <Stack>
                <CheckoutTable></CheckoutTable>
           
            </Stack>

        </Container>
    );
};


Checkout.getLayout = function getLayout(page: ReactElement) {
    return (
        <SharedLayout>
            {page}
        </SharedLayout>
    )
}
