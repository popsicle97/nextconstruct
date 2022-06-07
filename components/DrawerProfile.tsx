import { Avatar, Group, UnstyledButton, Text, Title } from "@mantine/core";
import React from "react";

export default function DrawerProfile() {
  return (
    <UnstyledButton>
      <Group>
        <Avatar size={60} color="blue">
          BH
        </Avatar>
        <div>
          <Title order={3}>Bob Handsome</Title>
          <Text size="sm" color="gray">
            bob@handsome.inc
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
