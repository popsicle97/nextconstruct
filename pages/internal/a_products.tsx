import { Title, Text, ActionIcon, TextInput, Tooltip, Table, Image } from "@mantine/core"
import { ReactElement } from "react"
import { DotsVertical, Filter, Plus } from "tabler-icons-react"
import AdminLayout from "../../components/AdminLayout"

const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },


];

export default function AdminProducts() {

    const rows = elements.map((element) => (
        <tr key={element.name}>
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
            <td className="p-0 m-0 w-1">
                <ActionIcon size={"xs"}>
                    <DotsVertical />
                </ActionIcon>
            </td>
        </tr>
    ));

    return (
        <div>
            <div className="shadow-sm p-4 bg-white rounded-sm flex justify-between place-items-center">
                <div>
                    <Title order={2} className="text-slate-700">Add New Product</Title>
                    <Text size="sm" className="text-slate-400">Add a new product to the public store</Text>
                </div>
                <div>
                    <ActionIcon size={60} radius="xl" className="bg-green-500 text-white hover:bg-green-300 border-8 border-slate-50">
                        <Plus size={"100%"} />
                    </ActionIcon>
                </div>
            </div>
            <div className="shadow-sm bg-white mt-2 rounded-sm p-2">
                <div className="flex justify-between flex-nowrap place-items-center">
                    <Title order={2} className="text-slate-700">Product Listing</Title>
                    <div className="flex place-items-center space-x-2">
                        <Tooltip label="Filter by" withArrow>
                            <ActionIcon size="md">
                                <Filter size={"100%"} />
                            </ActionIcon>
                        </Tooltip>
                        <TextInput radius={"xl"} placeholder="Search products" type="text"></TextInput>
                    </div>
                </div>
                <div className="overflow-y-scroll mt-4 w-full h-96 max-h-96">
                    <Table fontSize="xs" horizontalSpacing={"xs"} verticalSpacing={1}>
                        <thead className="sticky top-0 bg-white z-10 shadow-sm">
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Units</th>
                                <th>Price (RM)</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}


AdminProducts.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}