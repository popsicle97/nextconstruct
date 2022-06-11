import { Title, Table, Button, ActionIcon, Tooltip, NumberInput, Divider, Group, Box, Text, Modal, Stack } from "@mantine/core";
import React, { useState } from "react";
import { BrandWhatsapp, ClearAll, Minus } from "tabler-icons-react";

const cart = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];


const clearCart = () => {

    return cart.length = 0;
}

export default function CheckoutTable() {

    const [opened, setOpened] = useState(false);

    const rows = cart.map((item) => (
        <tr key={item.name} >
            <td width={"50%"} >{item.position}</td>
            <td>{item.name}</td>
            <td>
                <NumberInput defaultValue={18} className="w-20" />
                {/* {element.symbol} */}
            </td>
            <td>{item.mass}</td>
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
        <div >
            <Modal opened={opened} onClose={() => setOpened(false)} title={<Title order={4}>Confirmation</Title>}>
                <Stack>
                    <Text>Confirm action to clear your cart completely?</Text>
                    <Group position="right">
                        <Button className="bg-red-500 hover:bg-red-400" onClick={() => setOpened(false)}>Cancel</Button>
                        <Button className="bg-violet-500 hover:bg-violet-400" onClick={() => {
                            clearCart();
                            setOpened(false);
                        }}>Confirm</Button>
                    </Group>
                </Stack>
            </Modal>
            <Title order={3}>Checkout</Title>
            <Group position="right" className="flex flex-row">
                <Button disabled={cart.length ? false : true} onClick={() => setOpened(true)} size="xs" className="bg-red-500 hover:bg-red-400 rounded-md" leftIcon={<ClearAll />}>Clear All</Button>
            </Group>
            <Table className="my-2">
                <thead className="border">
                    <tr>
                        <th>Products</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="border">{rows}</tbody>
            </Table>
            <Divider label="End" labelPosition="center"></Divider>
            <Group position="apart" className="my-2">
                <div className="flex space-x-2">
                </div>
                <div className="flex space-x-2">
                    <button className="bg-green-500 hover:bg-green-400 text-white p-2 flex flex-row text-sm rounded-md shadow-md place-items-center" >
                        <BrandWhatsapp className="mr-2" />Checkout with WhatsApp</button>
                    <button className="bg-violet-500 hover:bg-violet-400 text-white p-2 text-sm rounded-md shadow-md">Checkout</button>
                </div>
            </Group>
            <Divider ></Divider>
        </div>
    )
}