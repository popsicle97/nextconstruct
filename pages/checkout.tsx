import { Container, Stack, Table, Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { ReactElement } from "react";
import CheckoutTable from "../components/CheckoutTable";
import SharedLayout from "../components/SharedLayout";



export default function Checkout() {


    return (
        <Container className="py-2 px-2">
            <Stack>
                <CheckoutTable></CheckoutTable>
            </Stack>
        </Container>
    );
};


Checkout.getLayout = function getLayout(page  : ReactElement) {
    return (
        <SharedLayout>
          {page}
        </SharedLayout>
    )
  }
