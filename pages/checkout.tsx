import { Container, Stack, Table, Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import CheckoutTable from "../components/CheckoutTable";



const Checkout: NextPage = () => {


    return (
        <Container className="py-2 px-2">
            <Stack>
                <CheckoutTable></CheckoutTable>
            </Stack>
        </Container>
    );
};

export default Checkout;
