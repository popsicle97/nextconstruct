import { Title, Table, Button, ActionIcon, Tooltip, NumberInput, Divider, Group, Box, Text } from "@mantine/core";
import React from "react";
import { BrandWhatsapp, Minus } from "tabler-icons-react";

const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

export default function CheckoutTable() {

    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td width={"50%"}>{element.position}</td>
            <td>{element.name}</td>
            <td>
                <NumberInput defaultValue={18} className="w-20" />
                {/* {element.symbol} */}
            </td>
            <td>{element.mass}</td>
            <td width={20}>
                <Tooltip label="Delete" withArrow>
                    <ActionIcon color="red">
                        <Minus />
                    </ActionIcon>
                </Tooltip>
            </td>
        </tr>
    ));

    return (
        <>
            <Title order={2}>Checkout</Title>
            <Table >
                <thead className="border">
                    <tr>
                        <th>Products</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
            <Divider label="End" labelPosition="center"></Divider>
            <Group position="right">
                <Button className="bg-green-500 hover:bg-green-400" leftIcon={<BrandWhatsapp />}>Checkout with WhatsApp</Button>
                <Button className="bg-cyan-500 hover:bg-cyan-400">Checkout</Button>
            </Group>
            <Divider ></Divider>
        </>
    )
}