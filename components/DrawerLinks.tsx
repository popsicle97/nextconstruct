import { Box, Button, List, Stack, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { ChevronRight } from "tabler-icons-react";
import { PageRoutes } from "../interfaces/PageRoutes";

export default function DrawerLinks({
  pageRoutes,
}: {
  pageRoutes: Array<PageRoutes>;
}) {
  return (
    <List>
      {pageRoutes.map((page: PageRoutes, index: number) => (
        <List.Item key={index}>
          <Link href={page.route}>
            <Box
              className="rounded-lg"
              sx={(theme) => ({
                width: "90%",
                marginLeft: "5px",
                height: "3.5em",
                display: "flex",
                alignItems: "center",
                color: "dark",
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
                cursor: "pointer",

                "&:hover": {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[5]
                      : theme.colors.gray[1],
                },
              })}
            >
              {page.name}
            </Box>
          </Link>
        </List.Item>
      ))}
    </List>
  );
}
