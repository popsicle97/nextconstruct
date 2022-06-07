import { Box, Button, Group, UnstyledButton } from "@mantine/core";
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
          <UnstyledButton className="hover:bg-violet-50 p-1 rounded-md hover:shadow-sm cursor-pointer">
            {page.name}
          </UnstyledButton>
        </Link>
      ))}
    </Group>
  );
}
