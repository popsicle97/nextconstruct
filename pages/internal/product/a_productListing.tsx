import { Title, Text, ActionIcon, TextInput, Tooltip, Table, Image, Divider, Select, MediaQuery, Box } from "@mantine/core"
import { DateRangePicker } from "@mantine/dates";
import { ReactElement, useState } from "react"
import { CalendarEvent, DotsVertical, Filter, ListDetails, Plus } from "tabler-icons-react"
import AdminLayout from "../../../components/AdminLayout";
import AddProductModal from "../../../components/modals/AddProductModal";

const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },



];

export default function AdminProductListing() {

    const [value, setValue] = useState<[Date | null, Date | null]>([
        new Date(2021, 11, 1),
        new Date(2021, 11, 5),
    ]);

    const rows = elements.map((element, index) => (
        <tr key={index} className="last:bg-slate-50 first:bg-slate-50">
            <td>
                <div className="w-24">
                    <Image
                        radius="md"
                        src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
                        alt="Random unsplash image"
                    />
                </div>
            </td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
            <td>{element.mass}</td>
            <td>{element.mass}</td>
            <td className="p-0 m-0 w-1">
                <ActionIcon size={"xs"}>
                    <DotsVertical />
                </ActionIcon>
            </td>
        </tr>
    ));

    return (
        <div className="h-93PercHeight">
            <div className="shadow-sm p-4 bg-white rounded-sm flex justify-between place-items-center">
                <div>
                    <Title order={2} className="text-slate-700">Add New Product</Title>
                    <Text size="sm" className="text-slate-400">Add a new product to the public store</Text>
                </div>
                <div>
                    {/* <ActionIcon size={60} radius="xl" className="bg-green-500 text-white hover:bg-green-300 border-8 border-slate-50">
                        <Plus size={"100%"} />
                    </ActionIcon> */}
                    <AddProductModal></AddProductModal>
                </div>
            </div>
            <div className="shadow-sm bg-white mt-2 rounded-sm p-2 h-93PercHeight ">
                <div className="flex justify-between flex-nowrap place-items-center ">
                    <div className="flex place-items-center space-x-2">
                        <ListDetails className="text-slate-700" />
                        <Title order={2} className="text-slate-700">Products</Title>
                    </div>
                    <div className="flex place-items-center space-x-1 flex-wrap">
                        <Select data={[]} radius={"xl"} placeholder="Select a category" size={"xs"}></Select>
                        <Select data={[]} radius={"xl"} placeholder="Select a brand" size={"xs"}></Select>
                        <DateRangePicker
                            placeholder="Pick dates range"
                            value={value}
                            onChange={setValue}
                            inputFormat="DD.MM.YYYY"
                            radius={"xl"}
                            size={"xs"}
                            icon={<CalendarEvent size={16} className="text-green-400" />}
                        />
                        {/* <Tooltip label="Filter by" withArrow>
                            <ActionIcon size="md">
                                <Filter size={"100%"} />
                            </ActionIcon>
                        </Tooltip> */}
                        <TextInput radius={"xl"} placeholder="Search products" type="text" size={"xs"}></TextInput>
                    </div>
                </div>
                <div className="overflow-y-scroll mt-4 w-full h-93PercHeight border-b">
                    <Table fontSize="xs" horizontalSpacing={"xs"} verticalSpacing={1}>
                        <thead className="sticky top-0 bg-white z-10 shadow-sm">
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Units</th>
                                <th>Brand</th>
                                <th>Category</th>
                                <th>Price (RM)</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>
                    <Divider></Divider>
                </div>
            </div>
        </div>
    )
}


AdminProductListing.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}