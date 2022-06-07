import { ActionIcon, Indicator } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { ShoppingCart } from "tabler-icons-react";

export default function CartButton() {
  return (
    <Indicator size={17} label="3" color="red">
      <Link href="/checkout">
        <ActionIcon>
          <ShoppingCart />
        </ActionIcon>
      </Link>
    </Indicator>
  );
}
