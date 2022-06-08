import { Box, Button, Group, UnstyledButton, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { PageRoutes } from "../interfaces/PageRoutes";

export default function HeaderLinks({
  pageRoutes,
}: {
  pageRoutes: Array<PageRoutes>;
}) {
  return (
    <Group spacing={"lg"}>
      {pageRoutes.map((page: PageRoutes, index: number) => (
        <Link href={page.route} key={index}>
          <UnstyledButton className="hover:border p-1 cursor-pointer" sx={{ '&:hover': {
              border : '1px solid #e5e7eb'
          } }}>
            <Text transform="uppercase" weight={350}>{page.name}</Text>
          </UnstyledButton>
        </Link>
      ))}
    </Group>
  );
}
