import {
  Box,
  Container,
  Grid,
  MediaQuery,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { NextPage } from "next";
import React, { ReactElement } from "react";
import { Search } from "tabler-icons-react";
import OptionModal from "../components/modals/OptionModal";
import ProductBrand from "../components/ProductBrand";
import ProductCategory from "../components/ProductCategory";
import ProductFilter from "../components/ProductFilter";
import SharedLayout from "../components/SharedLayout";

export default function Products(){
  return (
    <Container className="py-2 px-2">
      <Grid align="flex-start">
        <Grid.Col span={3} lg={3}>
          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Stack >
              <TextInput icon={<Search className="h-5 w-5" />} radius="md" placeholder="Search products"></TextInput>
              {/* <Title order={4}>Category</Title> */}
              {/* <Divider label="Category" labelPosition="center"></Divider> */}
              <div>
                <ProductCategory type="browser"></ProductCategory>
              </div>
              <div>
                <ProductBrand type="browser"></ProductBrand>
              </div>
              <div>
                <ProductFilter></ProductFilter>
              </div>
            </Stack>
          </MediaQuery>

        </Grid.Col>
        <Grid.Col lg={9} md={9} sm={12}>
          <div>
            <MediaQuery largerThan="md" styles={{ display: "none" }}>
              <Box >
                <Stack spacing={3}>
                  <TextInput icon={<Search className="h-5 w-5" />}
                    radius="md" placeholder="Search products"></TextInput>
                  <OptionModal></OptionModal>
                </Stack>
              </Box>
            </MediaQuery>
          </div>
          <div>
            <Title order={3}>Products</Title>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};


Products.getLayout = function getLayout(page  : ReactElement) {
  return (
      <SharedLayout>
        {page}
      </SharedLayout>
  )
}