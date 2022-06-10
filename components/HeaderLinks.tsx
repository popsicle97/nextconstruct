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
        <Link href={page.route} key={index} passHref>
          <a>{page.name}</a>
        </Link>
      ))}
    </Group>
  );
}
