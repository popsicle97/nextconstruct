import { ActionIcon, Title, Text, TextInput, Tooltip, Table, Collapse, Stack, Button, Divider } from "@mantine/core"
import { ReactElement, useState } from "react"
import { ClipboardList, Filter, Plus, } from "tabler-icons-react"
import AdminLayout from "../../../components/AdminLayout"
import AddBrandModal from "../../../components/modals/AddBrandModal";

const brands = [];


export default function AdminBrandListing() {

    return (
        <div className="h-93PercHeight">
            <div className=" shadow-sm p-4 bg-white rounded-sm flex justify-between place-items-center">
                <div>
                    <Title order={3} className="text-slate-700">Add New Brand</Title>
                    <Text size="sm" className="text-slate-400">Add a new brand for a product</Text>
                </div>
                <div>
                    {/* <ActionIcon onClick={() => setOpen(o => !o)} size={60} radius="xl" className="bg-green-500 text-white hover:bg-green-300 border-8 border-slate-50">
                            <Plus size={"100%"} />
                        </ActionIcon> */}
                    <AddBrandModal></AddBrandModal>
                </div>
            </div>
            <div className="shadow-sm bg-white mt-2 rounded-sm p-2 h-93PercHeight ">
                <div className="flex justify-between flex-nowrap place-items-center">
                    <div className="flex place-items-center space-x-2">
                        <ClipboardList className="text-slate-700"/>
                        <Title order={2} className="text-slate-700">Brands</Title>
                    </div>
                    <div className="flex place-items-center space-x-2">
                        <Tooltip label="Filter by" withArrow>
                            <ActionIcon size="md">
                                <Filter size={"100%"} />
                            </ActionIcon>
                        </Tooltip>
                        <TextInput radius={"xl"} placeholder="Search brand" type="text"></TextInput>
                    </div>
                </div>
                <div className="overflow-y-scroll mt-4 w-full h-93PercHeight ">
                    <Table fontSize="xs" horizontalSpacing={"xs"} verticalSpacing={1}>
                        <thead className="sticky top-0 bg-white z-10 shadow-sm">
                            <tr>
                                <th>Name</th>
                                <th>Date Added</th>
                                <th>Units</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Table data here */}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

AdminBrandListing.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}