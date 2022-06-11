import { Accordion, Box, Button, Collapse, Divider, List, Select } from "@mantine/core";
import React, { useState } from "react";
import { ChevronDown, ChevronRight, ChevronsDown } from "tabler-icons-react";


export default function ProductCategory({ type = "mobile" || "browser" }) {

    const [opened, setOpen] = useState(true);

    return (
        type === "browser" ?
            <>

                {/* <Accordion className="border rounded-lg" iconPosition="right" iconSize={36} transitionDuration={200} multiple
                    styles={{
                        label: {
                            fontSize: '14px',
                        },
                        // content : {
                        //   border : "1px solid red"
                        // },
                        item: {
                            border: "none",
                            padding: 0,
                        }
                    }}>
                    <Divider label="Test"></Divider>
                    <Accordion.Item label="Cement"></Accordion.Item>
                    <Accordion.Item label="Plasters"></Accordion.Item>
                </Accordion> */}
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
                        compact>Show Categories</Button> </>}
                        labelPosition="center" style={{ width: "100%" }}></Divider>
                </Box>
                <Collapse in={opened} className="border border-b-0 border-t-0 p-2">
                    <List>
                        <List.Item className="text-xs">
                            <p>Item 1</p>
                        </List.Item>
                        <List.Item className="text-xs">
                            <p>Item 1</p>
                        </List.Item>
                        <List.Item className="text-xs">
                            <p>Item 1</p>
                        </List.Item>
                        <List.Item className="text-xs">
                            <p>Item 1</p>
                        </List.Item> <List.Item className="text-xs">
                            <p>Item 1</p>
                        </List.Item> <List.Item className="text-xs">
                            <p>Item 1</p>
                        </List.Item> <List.Item className="text-xs">
                            <p>Item 1</p>
                        </List.Item> <List.Item className="text-xs">
                            <p>Item 1</p>
                        </List.Item> <List.Item className="text-xs">
                            <p>Item 1</p>
                        </List.Item> <List.Item className="text-xs">
                            <p>Item 1</p>
                        </List.Item> <List.Item className="text-xs">
                            <p>Item 1</p>
                        </List.Item>
                        <List.Item className="text-xs">
                            <p>Item 1</p>
                        </List.Item>
                        <List.Item className="text-xs">
                            <p>Item 1</p>
                        </List.Item>
                    </List>
                </Collapse>
            </> :
            <>

                <Select data={["t1", "t2", "t3"]}></Select>
            </>
    )
}