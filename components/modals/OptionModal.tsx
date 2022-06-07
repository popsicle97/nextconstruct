import { Button, Divider, Modal, Radio, RadioGroup, Select, Stack } from "@mantine/core";
import React, { useState } from "react";
import { Adjustments } from "tabler-icons-react";
import ProductCategory from "../ProductCategory";


export default function OptionModal() {

    const [opened, setOpened] = useState(false);


    return (
        <>
            <Modal opened={opened} title="Advanced Search" onClose={() => setOpened(false)}>
                <Stack>
                    <Divider label="Category" labelPosition="left" ></Divider>
                    <ProductCategory type="mobile"></ProductCategory>
                    <Divider label="Brand" labelPosition="left" ></Divider>
                    <Select placeholder="Pick a Brand" data={['Test', 'Test2', 'Test3']}></Select>
                    <Divider label="Filter by" labelPosition="left" ></Divider>
                    <RadioGroup
                        orientation="horizontal"
                    >
                        <Radio value="latest" label="Latest" />
                        <Radio value="price" label="Pricing" />
                    </RadioGroup>
                </Stack>
            </Modal>
            <Button leftIcon={<Adjustments />} className="rounded-md" color="violet" variant="outline"
                onClick={() => setOpened(true)}
            >Advanced Search</Button>

        </>
    )
}