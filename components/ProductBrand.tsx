import { Box, Button, Collapse, Divider, List, Select } from "@mantine/core";
import React, { useState } from "react";
import { BorderLeft, ChevronDown, ChevronRight } from "tabler-icons-react";


const brands = [
    "Brand",
    "Brand",
    "Brand",
    "Brand",
    "Brand",
    "Brand",
    "Brand",
    "Brand",
    "Brand",
]

export default function ProductBrand({ type = "mobile" || "browser" }) {

    const [opened, setOpen] = useState(true);

    return (
        type === "browser" ?
            <>
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
                        compact>Show Brands</Button> </>}
                        labelPosition="center" style={{ width: "100%" }}></Divider>
                </Box>
                <Collapse in={opened} className="border border-t-0 border-b-0 px-2">
                    <List className="p-0">
                        {
                            brands.map((brand, index) => (
                                <List.Item className="text-xs hover:bg-gray-50 h-6 flex place-items-center" key={index}>
                                    <p>{brand} {index}</p>
                                </List.Item>
                            ))
                        }
                    </List>
                </Collapse>
            </> :
            <>

                <Select data={["t1", "t2", "t3"]}></Select>
            </>
    )
}