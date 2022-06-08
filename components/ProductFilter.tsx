import { Accordion, Box, Text, Button, Collapse, Divider, List, Radio, RadioGroup, SegmentedControl, Stack, Title, Group, TextInput, SimpleGrid } from "@mantine/core";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "tabler-icons-react";


export default function ProductFilter() {

    const [opened, setOpen] = useState(true);
    const [value, setValue] = useState('latest');

    return (
        <div>
            <Box onClick={() => setOpen((o) => !o)}
                sx={(theme) => ({
                    padding: theme.spacing.xl,
                    borderRadius: theme.radius.md,
                    cursor: 'pointer',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "2em",
                    width: "100%",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    '&:hover': {
                        backgroundColor:
                            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                    },
                })}
            >
                <Divider label={<> <Button styles={{
                    label: {
                        fontSize: "12px",
                        width: "100%"
                    }
                }} variant="light" color="gray" rightIcon={opened ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    compact>Show Filters</Button> </>}
                    labelPosition="center" style={{ width: "100%" }}></Divider>

            </Box>
            <Collapse in={opened} className="border border-t-0 p-2">
                <Stack>
                    <Title order={5}>Filter by</Title>
                    <SegmentedControl
                        value={value}
                        onChange={setValue}
                        size="xs"
                        data={[
                            { label: 'Latest', value: 'latest' },
                            { label: 'Low Price', value: 'lowprice' },
                            { label: 'High Price', value: 'highprice' },
                        ]} />
                    <Text size="xs" color="gray">Price Range (RM)</Text>
                    <SimpleGrid cols={3} className="flex justify-center place-items-center">
                        <TextInput placeholder="MIN" radius="md" size="xs"></TextInput>
                        <ChevronRight size={20} />
                        <TextInput placeholder="MAX" radius="md" size="xs"></TextInput>
                    </SimpleGrid>
                </Stack>
            </Collapse>
        </div>
    )
}
